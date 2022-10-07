import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'services/auth.service';

import { IUser } from 'models/user.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user: IUser | undefined;
  myForm!: FormGroup
  @Input()
  userToModify: IUser | null = null;
  private userSubscription: Subscription | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const userFormList = new FormArray<any>([]);

if(!this.userToModify){
  this.myForm = new FormGroup({
    nomAfficher: new FormControl<string>('', Validators.nullValidator)
  })
}else{
 this.myForm = new FormGroup({
  nomAfficher: new FormControl<string>(
    this.userToModify.nomAfficher, Validators.nullValidator
  )
 })
}



    this.auth.getUser().then((user) => {
      this.user = user;
    });
  }

  onSubmit(){
      const userForm ={
        nomAfficher: this.myForm.value.nomAfficher as string
      }
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
