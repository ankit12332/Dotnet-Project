import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavComponent implements OnInit {
  model:any={};
  currentUser$: Observable<User>;
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error); 
    });
  }
  

  logout(){
    this.accountService.logout();
  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error =>{
  //     console.log(error);
  //   });
  // }
}
