import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/user.service'
import { Router } from '@angular/router';
import  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  loggedIn: boolean;
  res
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(){
    
    this.service.login(this.loginForm.value).subscribe(res => {
      this.res=res
      localStorage.setItem('loginToken',this.res.token)
      this.router.navigate(['dashboard/'])
    })
  }


}
