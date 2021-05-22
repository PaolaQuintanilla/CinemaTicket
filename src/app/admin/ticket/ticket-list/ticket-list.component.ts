import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
