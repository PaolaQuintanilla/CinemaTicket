import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit(): void {
    this.cinemaService.cinemaGetMoviesGet$Json()
    .subscribe(result => {
      this.movies = result;
    })
  }

}
