import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
import { IndentifyRoute } from 'src/app/emit-events/indentify-route';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page: string = '';
  screen!: number;

  constructor(
    private router: Router, 
    public snackBar: MatSnackBar,
    private identifyRoute: IndentifyRoute
    ) { }

  ngOnInit(): void {

    this.page = this.identifyRoute.indentifyPage();  

    this.identifyRoute.emitRoute.subscribe(
      pageEmit => this.page = pageEmit
    )

    this.screen = window.innerWidth;
  }

  returnHomePage(){
    this.router.navigate(['home']);
  }

  openMenuModal(){

    const modalRef = this.snackBar.openFromComponent(MenuModalComponent, {
      
      panelClass: ["menu-style"],
      verticalPosition: 'top',
      horizontalPosition: 'left'
    });

    
  }

}
