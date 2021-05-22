import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectionCriteria } from 'src/app/_services/cinema/models';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {
  form: FormGroup;
  projection: any;
  loading = false;
  submitted = false;
  movies: any;
  theaters: any;
  hours: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService
  ) { 
    this.projection = {} as ProjectionCriteria;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hourId: ['', Validators.required],
      theaterId: ['',Validators.required],
      movieId: ['', Validators.required]
    });
    this.getLists();
  }

  getLists() {
    this.cinemaService.cinemaGetHoursGet$Json()
    .subscribe(result => {
      this.hours = result;
    })
    this.cinemaService.cinemaGetMoviesGet$Json()
    .subscribe(result => {
      this.movies = result;
    })
    this.cinemaService.cinemaGetTheatersGet$Json()
    .subscribe(result => {
      this.theaters = result;
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
      return;
    }
    
    this.loading = true;
    this.create();
  }

  create() {
    this.projection.movieId = this.f.movieId.value;
    this.projection.projectionHourId = this.f.hourId.value;
    this.projection.theaterId = this.f.theaterId.value;
    this.cinemaService.cinemaCreateProjectionPost$Json({body: this.projection})
    .subscribe(result => {
      this.router.navigate(['/admin/movie/list']);
    })
  }

}
