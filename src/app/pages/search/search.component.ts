import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchEmitEventService } from 'src/app/emit-events/search-emit-event.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  userName: string = '';
  user: User = {
    'avatar': '', 
    'name': '', 
    'bio': '', 
    'urlUser': '', 
    'starredList': [ { 'name': '', 'description': '', 'flagType': '', 'urlRepository': '' } ] 
  }

  formText:string = '';
  @Input() modalForm: boolean = false;
  

  constructor(
    private activatedRoute: ActivatedRoute, 
    private searchEmiteventservice: SearchEmitEventService, 
    private userService: UserService
    ) { }

  ngOnInit(): void {
    
    if(this.modalForm == false){
      this.user =  this.userService.treatResponse( this.activatedRoute.snapshot.data['user'] );
    }

    this.searchEmiteventservice.emitUserModal.subscribe(
      userEmit => this.user = userEmit
    )
  }

}
