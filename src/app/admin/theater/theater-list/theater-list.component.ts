import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})

export class TheaterListComponent implements OnInit {

  theaters: any[];

  constructor(private cinemaService: CinemaService) { 
  }

  ngOnInit(): void {
    this.cinemaService.cinemaGetTheatersGet$Json()
    .subscribe(result => {
      this.theaters = result;
    })
  }

}
