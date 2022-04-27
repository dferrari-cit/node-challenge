import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  @Input() userInfo: User = {'avatar': '', 'bio': '', 'name': '', 'starredList': [], 'urlUser': ''};
  
  constructor() { 
  
  }

  ngOnInit(): void {
  }

  addCont(){
  }
}
