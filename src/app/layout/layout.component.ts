import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  host: { class: 'app-container' },
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
