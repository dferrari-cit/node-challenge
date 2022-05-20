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
  @Output() resgistersResult = new EventEmitter<boolean>();
  //filterResult: any;

  constructor(private formBuilder: FormBuilder, private filter: FilterService) { 
    this.filterForm = new FormGroup({
      inputSelectType: new FormControl(''),
      inputName: new FormControl(''),
      inputDay: new FormControl(''),
      inputSelectMonth: new FormControl(''),
      inputYear: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      inputSelectType: ['', Validators.required],
      inputName: [''],
      inputDay: [''],
      inputSelectMonth: [''],
      inputYear: ['']
    })
  }

  search() {
    var dateForm: string = '';
    this.request = 'search/'

    if(this.filterForm.get('inputSelectType')?.value == 'name'){
      this.request +=  'name/' + this.filterForm.get('inputName')?.value;
    }else
    if(this.filterForm.get('inputSelectType')?.value == 'date') {
      
      if(this.filterForm.get('inputSelectMonth')?.value){
        dateForm += this.filterForm.get('inputSelectMonth')?.value;
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

    this.filter.findRecords(this.request)
    .subscribe(
      (resp) => {
        resp.map((dados) => this.modifyData(dados));

        this.filterResult = resp;
        
        this.emitResult.emit(this.filterResult);
        
      },
      (err: any) => {
        this.filterResult = [];
        this.emitResult.emit(this.filterResult);
        this.resgistersResult.emit(false);
      }
    )
  }

  selectChange(){
    this.typeSearch = this.filterForm.get('inputSelectType')?.value;
  }

  modifyData(dados: Filter): Filter{
    var dadosModify: Filter = dados;
    var date: string = dados.searchedDate;
    var day: string = date.slice(8, 10);
    var month: string = date.slice(4, 7);
    var year: string = date.slice(11, 15);

    if(month == 'Jan'){ month = '01' }
    if(month == 'Feb'){ month = '02' }
    if(month == 'Mar'){ month = '03' }
    if(month == 'Apr'){ month = '04' }
    if(month == 'May'){ month = '05' }
    if(month == 'Jun'){ month = '06' }
    if(month == 'Jul'){ month = '07' }
    if(month == 'Aug'){ month = '08' }
    if(month == 'Sep'){ month = '09' }
    if(month == 'Oct'){ month = '10' }
    if(month == 'Nov'){ month = '11' }
    if(month == 'Dec'){ month = '12' }

    date = day + '/' + month + '/' + year;
    dadosModify.searchedDate = date;

    
    return dadosModify;
  }

}
