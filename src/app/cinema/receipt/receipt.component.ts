import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinemaService } from 'src/app/_services/cinema/services';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  
  form: FormGroup;
  client: any;
  loading = false;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['',Validators.required],
      nit: [''],
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
    this.client.name = this.f.name.value;
    this.client.lastname = this.f.lastname.value;
    this.client.nit = this.f.nit.value;
    this.cinemaService.cinemaCreateMoviePost$Json({body: this.client})
    .subscribe( result => {
      // this.router.navigate(['/admin/movie/list']);
      }
    )
  }

}
