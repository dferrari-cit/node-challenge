import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/interfaces/filter';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @Input() filterResultArray: Filter[] = [];
  pageArray = this.filterResultArray;
  pagination = true;
  limitator = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnPageChange(event: PageEvent){
    this.pagination = false;
    console.log(event)
    const pageIndex = event.pageIndex;
    this.pageArray = [];
    this.filterResultArray.forEach((result, index) => {
      if(index >= this.limitator*pageIndex && index <= this.limitator*pageIndex+this.limitator){
        this.pageArray.push(result);
      }
    })
  }

  moreInfo(userName: string){
    this.router.navigate(['search', userName])
  }
}
