import { Injectable } from '@angular/core';
import { Reservation } from '../models/Reservation';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, lastValueFrom, map, switchMap } from 'rxjs';
import { ReservationDetail } from '../models/ReservationDetail';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly availableTimes = [10, 11, 12, 13, 14, 15, 16];
  collectionName = 'Reservations';

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) { }

  create(reservation: Reservation) {
    return this.auth.user.pipe(map(user => user?.uid))
    .pipe(switchMap(userId => {
      const id = this.afs.createId();

      return this.afs.collection<ReservationDetail>(this.collectionName).doc(id).set({ ...reservation, userId: userId!, id } as ReservationDetail);
    }))
  }

  getAvailableTimesForDate(date: Date) {
    var nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    return this.afs.collection<ReservationDetail>(this.collectionName, ref => ref.where('recordedAt', '>=', date).where('recordedAt', '<', nextDate))
    .get()
    .pipe(
      map(actions => {
        const localAvailableTimes = [...this.availableTimes];
        
        actions.forEach(action => {
          const date = action.get('recordedAt').toDate() as Date;
          const hours = date.getHours();
          const index = localAvailableTimes.indexOf(hours);
          
          if (index !== -1) {
            localAvailableTimes.splice(index, 1);
          }
        });
        return localAvailableTimes;
      })
    );
  }

  listForUser() {
    return this.auth.user.pipe(map(user => user?.uid))
      .pipe(switchMap(userId => this.afs.collection<ReservationDetail>(this.collectionName, ref => ref.orderBy('recordedAt', 'desc').where('userId', '==', userId)).get()))
      .pipe(map(query => query.docs.map(value => value.data())));
  }
}
