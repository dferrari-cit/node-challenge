import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  userName: string = '';
  user: User = {'avatar': '../../../assets/imgs/no-image.webp', 'bio': '', 'name': '', 'starredList': [], 'urlUser': ''};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.user = this.activatedRoute.snapshot.data['user'];
    this.saveUser(this.user);
  }

  private saveUser(userT: User){
    if(userT.avatar == null){
      userT.avatar = '../../../assets/imgs/no-image.webp'
    }
    if(userT.bio == null){
      userT.bio = '...'
    }
    if(userT.name == null){
      userT.name = '...'
    }
    if(userT.urlUser == null){
      userT.urlUser = '...'
    }else{
      userT.urlUser = "https://github.com/" + userT.urlUser.slice(29, )
    }
    if(userT.starredList.length > 0){
      userT.starredList.forEach(element => {
        let repository = element.urlRepository;
        element.urlRepository = "https://github.com/" + repository.slice(29, )
      })    
    }

    this.user = userT;
  }

}
