import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TheaterCriteria } from 'src/app/_services/cinema/models';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {
  
  form: FormGroup;
  theater: any;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService
  ) { 
    this.theater = {} as TheaterCriteria;
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
    this.theater.name = this.f.name.value;
    this.theater.description = this.f.description.value;
    this.cinemaService.cinemaCreateTheaterPost$Json({body: this.theater})
    .subscribe( result => {
      this.router.navigate(['/admin/theater/list']);
      }
    )
  }
}
