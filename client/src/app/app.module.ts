import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AlertModule } from 'ng2-bootstrap';
import { SignupComponent } from './signup/signup.component';

import {RouterModule, Routes } from "@angular/router";
import { DogComponent } from './dog/dog.component';
import { LoginComponent } from './login/login.component';

import { FileSelectDirective } from "ng2-file-upload";
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  //{ path: '/header', component: HeaderComponent },
  { path: 'signup',  component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dog', component: DogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    DogComponent,
    LoginComponent,
    FileSelectDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
