import { Component} from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent{

  constructor(){ }

  // constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string, private snackBar: MatSnackBar){}

  ngOnInit(): void {
  }

}


