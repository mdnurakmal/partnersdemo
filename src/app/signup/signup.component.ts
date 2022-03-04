import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup
  loading = false
  submitted = false

  constructor
    (
    private formBuilder: FormBuilder, 
    private service: ApiserviceService,
    private router: Router
    ) 
    { }

  dataexists:any;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.signupForm.controls}

  signUp(): void{

    this.submitted = true

    if (this.signupForm.invalid){
      return
    }

    this.loading = true

    this.service.registerUser(this.signupForm.value)
      .subscribe(res =>{
        console.log(`This is what it emits ${res})`)
        this.router.navigate(['/user/login'])
      },(err: HttpErrorResponse) =>{
        console.log(`This is the error message:${err.error}`)
        this.dataexists = err.error.message
      })

  }


}
