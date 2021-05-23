import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  projection: any;
  tickets: any;
  constructor(
    private router: Router,
    private cinemaService: CinemaService,
    private rutaActiva: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params.id;
    console.log(this.projection)
    this.cinemaService.cinemaGetProjectionIdGet$Json({id: id})
    .subscribe( result => {
      console.log(result)
      this.projection = result;
      this.cinemaService.cinemaGetTicketsByIdGet$Json({id: this.projection.theaterId})
      .subscribe( result => {
        console.log(result)
        this.tickets = result;
      })
    })
  }

}
