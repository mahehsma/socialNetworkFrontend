import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
// import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NewPostComponent } from './newsfeed/new-post/new-post.component';
import { NewsfeedItemComponent } from './newsfeed/newsfeed-item/newsfeed-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptor } from './auth-interceptor';


const appRoutes: Routes = [
  { path: '', component: LoginComponent}, 
  //{ path: 'newsfeed', canActivate: [AuthGuard],component: NewsfeedComponent}, 
  { path: 'newsfeed', component: NewsfeedComponent}, 
  { path: 'signup', component: SignupComponent}, 
  // { path: 'profile'}
  // { path: 'profile'}

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewsfeedComponent,
    NewPostComponent,
    NewsfeedItemComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  // providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
