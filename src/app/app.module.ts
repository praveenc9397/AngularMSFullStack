import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import {HttpClientModule} from '@angular/common/http';
import { CourseSaveComponent } from './components/course-save/course-save.component';
import { CourseDeleteComponent } from './components/course-delete/course-delete.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    CourseSaveComponent,
    CourseDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
