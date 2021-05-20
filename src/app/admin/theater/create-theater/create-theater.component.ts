import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

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
    this.theater.facultyId = this.f.description.value;
  }
}
