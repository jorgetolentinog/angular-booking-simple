import { Component, OnInit } from '@angular/core';
import { BookingAdminService } from 'src/app/service/admin/booking-admin.service';

@Component({
  selector: 'app-booking-admin',
  templateUrl: './booking-admin.component.html',
  styleUrls: ['./booking-admin.component.css'],
})
export class BookingAdminComponent implements OnInit {
  bookings: any[] = [];

  constructor(private readonly bookingAdminService: BookingAdminService) {}

  ngOnInit(): void {
    this.bookingFindAll();
  }

  bookingFindAll() {
    this.bookingAdminService.findAll().subscribe((elements) => {
      this.bookings = elements;
    });
  }

  bookingCancel(bookingId: string) {
    this.bookingAdminService.cancel(bookingId).subscribe(() => {
      this.bookingFindAll();
    });
  }

  bookingConfirm(bookingId: string) {
    this.bookingAdminService.confirm(bookingId).subscribe(() => {
      this.bookingFindAll();
    });
  }
}
