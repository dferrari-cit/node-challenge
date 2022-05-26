import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';

import { Filter } from 'src/app/interfaces/filter';
import { PageEvent } from '@angular/material/paginator';
import { SearchModalComponent } from '../../search/search-modal/search-modal.component';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @Input() filterResultArray: Filter[] = [];
  @Input() resultReg: boolean = true;
  pageArray: Array<Filter> = this.filterResultArray;
  pagination: boolean = true;
  limitator: number = 10;

  constructor(
    private router: Router,
    public searchModal: MatDialog
  ) { }

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
openSearchModal(userName: string) {
  
    const modalRef = this.searchModal.open(SearchModalComponent, {
      minWidth: '95%',
      minHeight: '30%',
      autoFocus: false,
      panelClass: ["searchModal-style"],
      data: userName
    });
  }
}
