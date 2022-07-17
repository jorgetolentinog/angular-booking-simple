import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from 'src/app/service/booking.service';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  bookings: any[] = [];
  tables: any[] = [];
  tableIdSelected: any;
  guests: number = 1;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bookingService: BookingService,
    private readonly tableService: TableService
  ) {
    this.bookingForm = this.formBuilder.group({
      date: '',
      time: '',
    });
  }

  ngOnInit(): void {
    this.bookingFindAll();
    this.tableFindAll();
  }

  bookingSubmit() {
    const value = this.bookingForm.value;
    const date = value.date + 'T' + value.time + '-0500';

    this.bookingService
      .create({
        tableId: this.tableIdSelected,
        date: date,
        guests: this.guests,
      })
      .subscribe(() => {
        this.bookingFindAll();
      });
  }

  bookingCancel(bookingId: string) {
    this.bookingService.cancel(bookingId).subscribe(() => {
      this.bookingFindAll();
    });
  }

  bookingFindAll() {
    this.bookingService.findAll().subscribe((elements) => {
      this.bookings = elements;
    });
  }

  tableFindAll() {
    this.tableService.findAll().subscribe((elements) => {
      this.tables = elements;
    });
  }

  tableSelect(tableId: string) {
    this.tableIdSelected = tableId;
  }

  addGuest() {
    if (this.guests < 10) {
      this.guests++;
    }
  }

  removeGuest() {
    if (this.guests > 1) {
      this.guests--;
    }
  }
}
