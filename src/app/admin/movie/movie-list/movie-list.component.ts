import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor() {
    this.movies = [{name: "test", description:"test"}, {name: "test", description:"test"}] ;

   }

  ngOnInit(): void {
  }

}
