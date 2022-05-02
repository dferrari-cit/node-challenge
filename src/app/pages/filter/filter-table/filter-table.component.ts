import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @Input() filterResultArray: Filter[] = [];

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
}
