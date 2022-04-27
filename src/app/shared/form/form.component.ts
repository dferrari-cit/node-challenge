import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorUser } from 'src/app/interfaces/error-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userGitForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> | undefined; 
  page: any;

  constructor( 
    private formBuilder: FormBuilder, 
    private userService: UserService, 
    private router: Router ,
    private activatedRoute: ActivatedRoute
  ) { 
    this.userGitForm = new FormGroup({
      userNameForm: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.userGitForm = this.formBuilder.group({
      userNameForm: ['', Validators.required]
    });

    this.page = this.activatedRoute.snapshot;
    console.log('page: ' + this.page) 
  }

  search(){

    var userName: string = this.userGitForm.get('userNameForm')?.value;
    
    this.userService.findUser(userName)
    .subscribe(
      () => this.router.navigate(['search', userName]),
      (err: ErrorUser) => {  
          //this.userNameInput?.nativeElement.focus();
          if(err.status == '404'){
            console.log("AQUIIIII")
            this.router.navigate(['search/error/', 'notfounduser']);
          }else {
            this.router.navigate(['search/error/', 'diferente']);
          }                   
          
        }
    );   
  }
}
