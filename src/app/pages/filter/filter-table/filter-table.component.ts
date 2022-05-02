import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/interfaces/filter';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @Input() filterResultArray: Filter[] = [];
  pageArray = this.filterResultArray;
  pagination = true;
  limitator = 13;

  constructor() { }

  ngOnInit(): void {
  }

  checkfilterResultArray(): boolean{
    console.log(this.filterResultArray)
    if(this.filterResultArray == undefined){
      return true;
    }else{
      return false;
    }
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
}
