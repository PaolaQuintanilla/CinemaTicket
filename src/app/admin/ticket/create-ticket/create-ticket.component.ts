import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketCriteria } from 'src/app/_services/cinema/models';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  form: FormGroup;
  ticket: any;
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
    this.ticket = {} as TicketCriteria;
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
    this.ticket.movieId = this.f.movieId.value;
    this.ticket.projectionHourId = this.f.hourId.value;
    this.cinemaService.cinemaGetSeatsByIdGet$Json({id: this.f.theaterId.value})
    .subscribe(result => {
      for (let index = 0; index < result.length; index++) {
        this.ticket.seatId = result[index].id;
        this.cinemaService.cinemaCreateTicketPost$Json({body: this.ticket})
        .subscribe( result => {
          this.router.navigate(['/admin/movie/list']);
          }
        )
        
      }
    })
  }
}
