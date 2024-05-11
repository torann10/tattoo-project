import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { ReservationDetail } from '../../shared/models/ReservationDetail';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent implements OnInit {

  now = new Date();
  displayedColumns = ['description', 'recordedAt'];
  reservations: ReservationDetail[] = [];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.reservationService.listForUser().subscribe(values => this.reservations = values);
  }

}
