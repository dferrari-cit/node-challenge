import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorUser } from 'src/app/interfaces/error-user';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userGitForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> | undefined; 
  
  userT: User = {'avatar': '../../../assets/imgs/no-image.webp', 'bio': '', 'name': '', 'starredList': [], 'urlUser': ''};

  constructor( private formBuilder: FormBuilder, private userService: UserService, public snackBar: MatSnackBar) { 
    this.userGitForm = new FormGroup({
      userNameForm: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.userGitForm = this.formBuilder.group({
      userNameForm: ['', Validators.required]
    });
  }

  search(){
    var userName: string = this.userGitForm.get('userNameForm')?.value;
    
    this.userService.verify(userName)
    .subscribe(
      resp => this.saveUser(resp),
      (err: ErrorUser) => {  
          if(err.status == '404'){
            this.snackBarUser();
          }                   
          this.userNameInput?.nativeElement.focus();
        }
    );   
  }

  private newMethod(err: any) {
    alert('Invalid user name or password: ' + err);
  }

  private saveUser(response: User){
    if(response.avatar == null){
      response.avatar = '../../../assets/imgs/no-image.webp'
    }
    if(response.bio == null){
      response.bio = '...'
    }
    if(response.name == null){
      response.name = '...'
    }
    if(response.urlUser == null){
      response.urlUser = '...'
    }else{
      response.urlUser = "https://github.com/" + response.urlUser.slice(29, )
    }
    if(response.starredList.length > 0){
      response.starredList.forEach(element => {
        let repository = element.urlRepository;
        element.urlRepository = "https://github.com/" + repository.slice(29, )
      })
        
      
    }

    this.userT = response;
    //console.log(this.userT.name)
  }

  snackBarUser(){
    this.snackBar.open('User not foud!', 'Done',{
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ["custom-style"]
    });

  }
}
