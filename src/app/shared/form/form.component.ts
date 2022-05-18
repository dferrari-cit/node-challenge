import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchEmitEventService } from 'src/app/emit-events/search-emit-event.service';
import { ErrorUser } from 'src/app/interfaces/error-user';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userGitForm: FormGroup;
  rota: string = '';
  user!: User;
  @Output() emitFormText = new EventEmitter<string>();
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private searchEmiteventservice: SearchEmitEventService
  ) {
    this.userGitForm = new FormGroup({
      userNameForm: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.userGitForm = this.formBuilder.group({
      userNameForm: ['', Validators.required]
    });

  }

  search() {

    var userName: string = this.userGitForm.get('userNameForm')?.value;

    this.userService.findUser(userName)
      .subscribe(
        (resp) => {
          this.rota = window.location.href.slice(22);
          this.router.navigate(['search', userName])

          if( this.rota != 'home' || this.rota.indexOf('error') < 0 ){
            
            this.user = this.userService.treatResponse(resp);
            this.searchEmiteventservice.emitUser(this.user)            
          }
          
          
        },
        (err: ErrorUser) => {
          //this.userNameInput?.nativeElement.focus();
          if (err.status == '404') {
            this.router.navigate(['search/error/', 'notfounduser']);
          } else if (err.status == '504') {
            this.router.navigate(['search/error/', 'gatewaytimeouterror']);
          }
        }
      );
  }
}