import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  // users:any;

  // constructor(private http: HttpClient) { }
  constructor() { }

  ngOnInit(): void {
    // this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  // getUsers(){
  //   this.http.get('https://localhost:7008/api/Users').subscribe(user => {
  //     this.users = user
  //   })
  // }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
