import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IndentifyRoute } from 'src/app/emit-events/indentify-route';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {

  constructor(
    private identifyRoute: IndentifyRoute,
    public snackBarRef: MatSnackBarRef<MenuModalComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

  closedModal(){
    this.snackBarRef.dismiss();
  }

  emitPage(page: string){
    this.identifyRoute.emitPage(page);
  }
}
