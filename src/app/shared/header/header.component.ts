import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  returnHomePage(){
    this.router.navigate(['home']);
  }
}
