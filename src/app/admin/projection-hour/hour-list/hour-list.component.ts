import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-hour-list',
  templateUrl: './hour-list.component.html',
  styleUrls: ['./hour-list.component.css']
})
export class HourListComponent implements OnInit {

  hours: any[];
  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.cinemaGetHoursGet$Json()
    .subscribe(result => {
      this.hours = result;
    })
  }

}
