import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Filter } from 'src/app/interfaces/filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  filterForm: FormGroup;
  request: string = '';
  typeSearch: string = '';
  filterResult: Filter[] = [];

  @Output() emitResult = new EventEmitter<Filter[]>();
  @Output() resgisters = new EventEmitter<string>();
  //filterResult: any;

  constructor(private formBuilder: FormBuilder, private filter: FilterService) { 
    this.filterForm = new FormGroup({
      inputSelect: new FormControl(''),
      inputName: new FormControl(''),
      inputDay: new FormControl(''),
      inputMonth: new FormControl(''),
      inputYear: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      inputSelect: ['', Validators.required],
      inputName: [''],
      inputDay: [''],
      inputMonth: [''],
      inputYear: ['']
    })
  }

  search() {
    var dateForm: string = '';
    this.request = 'search/'

    if(this.filterForm.get('inputSelect')?.value == 'name'){
      this.request +=  'name/' + this.filterForm.get('inputName')?.value;
    }else
    if(this.filterForm.get('inputSelect')?.value == 'date') {

      if(this.filterForm.get('inputMonth')?.value){
        dateForm += this.filterForm.get('inputMonth')?.value;
      }
  
      if(this.filterForm.get('inputDay')?.value && dateForm != ''){
        dateForm += "-" + this.filterForm.get('inputDay')?.value;
      }else{
        dateForm += this.filterForm.get('inputDay')?.value;
      }
  
      if(this.filterForm.get('inputYear')?.value && dateForm != ''){
        dateForm += "-" + this.filterForm.get('inputYear')?.value;
      }else{
        dateForm += this.filterForm.get('inputYear')?.value;
      }

      this.request += 'data/' + dateForm  ;
    }

    console.log(this.request)

    this.filter.findRecords(this.request)
    .subscribe(
      (resp) => {
        this.filterResult = resp;
        console.log('Pagina FilterForms: ' + this.filterResult)
        this.emitResult.emit(this.filterResult);
        
      },
      (err: any) => {console.log('ERROR: ' + err)}
    )
  }

  selectChange(){
    this.typeSearch = this.filterForm.get('inputSelect')?.value;
  }

}
