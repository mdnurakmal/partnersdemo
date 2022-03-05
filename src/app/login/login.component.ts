import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  errormessage:any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() {return this.form.controls}

  submit():void{

    this.submitted = true

    if (this.form.invalid){
      return
    }

    this.authService
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((response)=>{
        this.router.navigate(['/home'])
      }, (error: HttpErrorResponse) => {
        this.errormessage = error.error.message
      })
    // this.service.loginUser(this.form.value)
    // .subscribe((res) =>{
    //   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    //   this.router.navigateByUrl(returnUrl)
    // }, (err:HttpErrorResponse)=>{
    //   console.log(`This is the error message${err.error}`)
    //   this.errormessage = err.error.message
    // })




  }

}
