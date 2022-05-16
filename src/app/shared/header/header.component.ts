import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page: string = '';

  rota: string = "";

  constructor(private router: Router, public modal: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.rota = window.location.href;
    console.log("ddddd: " + this.rota)
  }

  returnHomePage(){
    this.router.navigate(['home']);
  }

  openMenuModal(){

    const modalRef = this.snackBar.openFromComponent(MenuModalComponent, {
      panelClass: ["menu-style"],
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });

    
  }

}
