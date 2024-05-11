import { Reservation } from "./Reservation";

export interface ReservationDetail extends Reservation {
    id: string;
    userId: string;
}