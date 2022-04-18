import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = "Carlos";

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    console.log("Out");
  }

  checkUser(){
    return true;
  }
}
