import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatCheckboxModule } from '@angular/material'

import { AppComponent } from './app.component';
import { MyHome } from './components/home/home.component';
import { MyContact } from './components/contact-me/contact-me.component';
import { AboutMe} from './components/about-me/about-me.component';

import { AppRoutingModule } from './app-routing.module';
import { MyFooter } from './my-footer/my-footer.component';
import { MyHeader } from './my-header/my-header.component';
import { DownloadResume } from './components/download-resume/download-resume.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHome,
    MyContact,
    MyFooter,
    MyHeader,
    AboutMe,
    DownloadResume
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyFooter, MyHeader]
})
export class AppModule { }
