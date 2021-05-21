import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieCriteria } from 'src/app/_services/cinema/models';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  form: FormGroup;
  movie: any;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService
  ) { 
    this.movie = {} as MovieCriteria;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
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
    this.movie.name = this.f.name.value;
    this.movie.description = this.f.description.value;
    this.cinemaService.cinemaCreateMoviePost$Json({body: this.movie})
    .subscribe( result => {
      this.router.navigate(['/admin/movie/list']);
      }
    )
  }

}
