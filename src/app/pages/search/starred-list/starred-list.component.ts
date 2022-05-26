import { Component, Input, OnInit } from '@angular/core';
import { StarredList } from 'src/app/interfaces/starred';

@Component({
  selector: 'app-starred-list',
  templateUrl: './starred-list.component.html',
  styleUrls: ['./starred-list.component.css']
})
export class StarredListComponent implements OnInit {
  
  @Input() starredListArray : StarredList[] = [];
  starredList: StarredList = {'name': '', 'description': '', 'flagType': '','urlRepository': ''};
  screen!: number;

  constructor() { }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

}
