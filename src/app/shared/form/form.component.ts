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
  rota: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
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


    this.rota = this.activatedRoute.snapshot.routeConfig?.path;
    //console.log('page: ' + this.rota)
  }

  search() {

    var userName: string = this.userGitForm.get('userNameForm')?.value;

    this.userService.findUser(userName)
      .subscribe(
        () => {
          console.log(this.rota)
          if( this.activatedRoute.snapshot.routeConfig?.path == 'home' ){
            this.router.navigate(['search', userName])
          }else
          if(this.activatedRoute.snapshot.routeConfig?.path == 'home'){

          }
        },
        (err: ErrorUser) => {
          //this.userNameInput?.nativeElement.focus();
          if (err.status == '404') {
            console.log("AQUIIIII")
            this.router.navigate(['search/error/', 'notfounduser']);
          } else if (err.status == '504') {
            this.router.navigate(['search/error/', 'gatewaytimeouterror']);
          }
        }
      );
  }
}