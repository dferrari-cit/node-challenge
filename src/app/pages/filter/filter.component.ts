import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() filterResultForm: Filter[] = [];
  @Input() resultRegisters: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
