import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  returnHomePage(){
    this.router.navigate(['home']);
  }
}
