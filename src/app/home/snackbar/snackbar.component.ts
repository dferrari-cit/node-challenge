import { Component, Inject} from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent{

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string, private snackBar: MatSnackBar){ }

  ngOnInit(): void {
  }

  closePopUp(){
  }

}


