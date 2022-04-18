import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  @Input() userInput: User = {'avatar': '', 'bio': '', 'name': '', 'starredList': [], 'urlUser': ''};
  contator: number = 0;
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }

  addCont(){
    this.contator += 1;
  }
}
