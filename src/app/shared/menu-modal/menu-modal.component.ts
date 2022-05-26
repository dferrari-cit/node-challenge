import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IndentifyRoute } from 'src/app/emit-events/indentify-route';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {

  page: string = '';
  screen!: number;
  
  constructor(
    private identifyRoute: IndentifyRoute,
    public menuSnackBar: MatSnackBarRef<MenuModalComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {

    
  }

  ngOnInit(): void {
    this.page = this.identifyRoute.indentifyPage();
    this.screen = window.innerWidth;
  }

  closedModal(){
    this.menuSnackBar.dismiss();
  }

  emitPage(page: string){
    this.identifyRoute.menuEmitPage(page);
  }

 
}
