import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { NewPostComponent } from './newsfeed/new-post/new-post.component';
import { NewsfeedItemComponent } from './newsfeed/newsfeed-item/newsfeed-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserPreviewComponent } from './user/user-preview/user-preview.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'newsfeed', canActivate: [AuthGuard],component: NewsfeedComponent}, 
  { path: 'signup', component: SignupComponent}, 
  { path: 'profile/:username', component: UserProfileComponent}
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
    SignupComponent,
    UserProfileComponent,
    UserPreviewComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  // providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
