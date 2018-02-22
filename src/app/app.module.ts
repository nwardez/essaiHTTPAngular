import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'

// IMPORTS DES COMPONENTS
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
//import { ContentComponent } from './content/content.component';
import { RoutingModule } from './/routing.module';
import { MatModule } from './/mat.module';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './post.service';
import { PostFormComponent } from './post-form/post-form.component';
import { Page404Component } from './page404/page404.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';



@NgModule({
  declarations: [
    AppComponent, 
    PostListComponent, 
    UserListComponent, 
    UserDetailComponent, 
    UserFormComponent, 
    UserPostsComponent, 
    PostDetailComponent, 
    PostFormComponent, 
    Page404Component, 
    DialogDeleteComponent
  ], //déclarations de tous les components
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [DialogDeleteComponent], // Pour l'utilisation des POPUPS
  providers: [ApiService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}