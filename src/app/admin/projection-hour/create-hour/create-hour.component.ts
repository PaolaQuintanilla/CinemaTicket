import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectionhourCriteria } from 'src/app/_services/cinema/models';
import { CinemaService } from 'src/app/_services/cinema/services';
import { TimeSpan } from 'src/app/_services/cinema/models/time-span';

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
  ) { 
    this.hour = {} as ProjectionhourCriteria;
  }

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
    let hours = this.f.hour.value.split(':')
    this.hour.hours = hours[0];
    this.hour.minutes = hours[1];
    this.hour.description = this.f.description.value;
    this.cinemaService.cinemaCreateHourPost$Json({body: this.hour})
    .subscribe( result => {
      this.router.navigate(['/admin/hours/list']);
      }
    )
  }

}
