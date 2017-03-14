import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[SignupService]
})
export class LoginComponent implements OnInit {
  user: any;
   formInfo = {
     username: '',
     password: '',
     email: '',
     address: ''
   };
   error: string;
   privateData: any = '';


  constructor(private router: Router,private session: SignupService) { }



  ngOnInit() {
    this.session.isLoggedIn()
       .subscribe(
         (user) => this.successCb(user)
       );
  }

  login() {
     console.log(this.formInfo);
     console.log(this.formInfo.username);
     this.session.login(this.formInfo)
       .subscribe(
         (user) => this.successCb(user),
         (err) => this.errorCb(err)
       );
   }

   logout() {
     this.session.logout()
       .subscribe(
         () => this.successCb(null),
         (err) => this.errorCb(err)
       );
   }

   getPrivateData() {
     this.session.getPrivateData()
       .subscribe(
         (data) => this.privateData = data,
         (err) => this.error = err
       );
   }

   errorCb(err) {
     this.error = err;
     this.user = null;
   }

   successCb(user) {
     this.user = user;
     this.error = null;
   }

}
