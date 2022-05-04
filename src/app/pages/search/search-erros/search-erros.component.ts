import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-erros',
  templateUrl: './search-erros.component.html',
  styleUrls: ['./search-erros.component.css']
})
export class SearchErrosComponent implements OnInit {

  tagErrors: any;
  message: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tagErrors = this.activatedRoute.snapshot.params['typeError']
    //console.log(this.tagErros)

    if(this.tagErrors == 'notfounduser'){
      this.message = 'Usuário não encontrado!'
    }else if(this.tagErrors == 'gatewaytimeouterror'){
      this.message = 'Erro no servidor!'
    }else{
      this.message = 'Erro'
    }
  }
}
