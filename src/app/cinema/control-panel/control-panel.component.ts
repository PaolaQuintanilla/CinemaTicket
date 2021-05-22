import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  movies: any[];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.cinemaGetProjectionsGet$Json()
    .subscribe(result => {
      
      this.movies = result;
    })
  }

}
