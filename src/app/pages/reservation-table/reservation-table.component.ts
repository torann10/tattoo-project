import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { AvailableTime } from '../../shared/models/AvailableTime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrl: './reservation-table.component.scss'
})
export class ReservationTableComponent implements OnInit {

  selectedDate!: Date;
  availableTimes = [10, 11, 12, 13, 14, 15, 16];
  availableTimesForSelectedDate?: AvailableTime[];
  selectedTime?: number;
  description?: string;

  constructor(private reservationService: ReservationService, private router: Router) {

  }

  ngOnInit(): void {
    const nowDate = new Date();
    let now = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

    while (!this.filterDate(now)) {
      now.setDate(now.getDate() + 1);
    }

    this.loadAvailableTimes(now);
  }

  loadAvailableTimes(date: Date | null) {
    if (!date) {
      return;
    }

    this.selectedDate = date;
    this.reservationService.getAvailableTimesForDate(this.selectedDate)
      .subscribe(val => {
        console.log(val);

        this.selectedTime = undefined;
        this.description = undefined;
        this.availableTimesForSelectedDate = this.availableTimes
          .map(availableTime => ({ value: availableTime, isAvailable: val.includes(availableTime) }));
      });
  }

  filterDate(date: Date): boolean {
    const nowDate = new Date();
    let now = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

    if (date < now) {
      return false;
    }

    if (date.getDay() == 0 || date.getDay() == 6) {
      return false;
    }

    return true;
  }

  timeSelectionChanged(value: number, event: any) {
    console.log(value, event);

    this.selectedTime = value;
  }

  reserve() {
    this.reservationService.create({
      recordedAt: new Date(this.selectedDate.setHours(this.selectedTime!)),
      description: this.description ?? '',
    }).subscribe({
      next: () => this.router.navigateByUrl('/my-reservations'),
      error: error => console.error(error),
    })
  }

}
