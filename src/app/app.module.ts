import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routes';

export const firebaseConfig = {
    apiKey: 'AIzaSyDENNNekUe7gTs-Wu5e8fWoOl_4HsgFNG0',
    authDomain: 'j2d2-website-angular.firebaseapp.com',
    databaseURL: 'https://j2d2-website-angular.firebaseio.com',
    projectId: 'j2d2-website-angular',
    storageBucket: 'j2d2-website-angular.appspot.com',
    messagingSenderId: '760581361681'
  };

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
