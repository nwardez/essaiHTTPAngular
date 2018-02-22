import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Page404Component } from './page404/page404.component';


const ROUTES: Routes = [
  {
    component: PostDetailComponent,
    path: 'posts/:id',
    children: [
      {path:'edit', component:PostFormComponent}
      ]
  },
  {
    path: '',
    pathMatch: 'full', // Si n'importe quoi est écris, il considère que c'est rien
    redirectTo: 'users'
  },
  {
    component: UserListComponent,
    path: 'users',
    children: [
      {path:':id', component: UserDetailComponent}
    ]
  },
  {
    path: 'user/:id', // Les : sont là pour dire que l'Id est un paramètre
    component: UserDetailComponent,
    children: [
      { path:'edit', component: UserFormComponent},  //Edition
      { path: 'posts', component: UserPostsComponent}, //Affichage des posts du usetr
      { path: 'create-post', component: PostFormComponent} // Création d'un nouveau post
    ]
  },
  {
    component: PostListComponent,
    path: 'posts'
  },
  {
    path:'**',
    component:Page404Component
  }
 

];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
 } )
  

export class RoutingModule { }
