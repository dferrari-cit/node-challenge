import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchEmitEventService } from 'src/app/emit-events/search-emit-event.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  user: User = {
    'avatar': '', 
    'name': '', 
    'bio': '', 
    'urlUser': '', 
    'starredList': [ { 'name': '', 'description': '', 'flagType': '', 'urlRepository': '' } ] 
  }
  userName: string = '';

  constructor(
    private userService: UserService,
    private searchEmiteventservice: SearchEmitEventService,
    public searchDialog: MatDialogRef<SearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
  { 
   this.userName = data;
  }

  ngOnInit(): void {
    this.userService.findUser(this.userName)
    .subscribe(
      (resp)=>{     
        this.user = this.userService.treatResponse(resp);
        this.searchEmiteventservice.emitUser(this.user)  
      }
    )
  }

  closedModal(){
    this.searchDialog.close();
  }

}
