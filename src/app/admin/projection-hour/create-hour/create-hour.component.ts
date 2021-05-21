import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-create-hour',
  templateUrl: './create-hour.component.html',
  styleUrls: ['./create-hour.component.css']
})
export class CreateHourComponent implements OnInit {

  form: FormGroup;
  hour: any;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hour: ['', Validators.required],
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
    this.hour.hour = this.f.hour.value;
    this.hour.description = this.f.description.value;
    this.cinemaService.cinemaCreateMoviePost$Json({body: this.hour})
    .subscribe( result => {
      this.router.navigate(['/admin/movie/list']);
      }
    )
  }

}
