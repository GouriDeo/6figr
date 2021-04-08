import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestServicet} from '../../services/track.service'
import {HttpRequestService} from '../../services/user.service'
import { Router } from '@angular/router';
import  jwt_decode from 'jwt-decode';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public record = [];
  showMenu : Boolean = false;
  showMenut : Boolean = false;
  addForm: FormGroup;
  showForm : FormGroup;
  constructor(private fb:FormBuilder, private service:HttpRequestServicet, private router:Router) {
   
    let token = localStorage.getItem('loginToken')
    let decodedUserDetails = jwt_decode(token)
    console.log(decodedUserDetails)
  }
  ngOnInit(): void {
  
    this.service.tracko()
    .subscribe(data => this.record = data)
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
    this.showMenut = true;
  }

  toggleMenut(){
    this.showMenut = !this.showMenut;
    this.showMenu = true;

  }

}
