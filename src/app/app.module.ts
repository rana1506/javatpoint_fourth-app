
import {  BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import {  CommonModule } from '@angular/common';
import {  HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './posts/post-list/post-list.component';

import { PostCreateComponent } from './posts/post-create/post-create.component';


import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){
    console.log('location AppModule')
  }
 }
