import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { SearchEmitEventService } from 'src/app/services/search-emit-event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  userName: string = '';
  user: User = this.userService.treatResponse( this.activatedRoute.snapshot.data['user'] );

  formText:string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private searchEmiteventservice: SearchEmitEventService, 
    private userService: UserService
    ) { }

  ngOnInit(): void {
    //this.userName = this.activatedRoute.snapshot.params['userName'];
    //this.user = this.userService.treatResponse( this.activatedRoute.snapshot.data['user'] );

    this.searchEmiteventservice.emitUserModal.subscribe(
      userEmit => this.user = userEmit
    )
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log('Fui alterado')
  }

  // private treatUser(userT: User){
  //   if(userT.avatar == null){
  //     userT.avatar = '../../../assets/imgs/no-image.webp'
  //   }
  //   if(userT.bio == null){
  //     userT.bio = '...'
  //   }
  //   if(userT.name == null){
  //     userT.name = '...'
  //   }
  //   if(userT.urlUser == null){
  //     userT.urlUser = '...'
  //   }else{
  //     userT.urlUser = "https://github.com/" + userT.urlUser.slice(29, )
  //   }
  //   if(userT.starredList.length > 0){
  //     userT.starredList.forEach(element => {
  //       let repository = element.urlRepository;
  //       element.urlRepository = "https://github.com/" + repository.slice(29, )
  //     })    
  //   }
  //   this.user = userT;
  // }

}
