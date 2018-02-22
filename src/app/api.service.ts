import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';
import { Itag } from './itag';
import { delay } from 'rxjs/operators/delay';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  //Pour afficher la liste des users  ----- Pour tout le reste, on peut mettre <any> à la place des Iuser et Ipost
  getUsers():Observable <Iuser[]>{
    return this.http.get('http://localhost:3000/users') as Observable<Iuser[]>;
  }

  //Pour afficher la liste des posts
  getPosts():Observable <Ipost[]> {
    return this.http.get('http://localhost:3000/posts') as Observable<Ipost[]>;
  }

  //Pour afficher 1 User en fonction de son ID passé en paramètre
  getUser (id: number):Observable <Iuser> {
    return this.http.get<Iuser>('http://localhost:3000/users/' + id) // Sans typer avec les as Observable
    .pipe(delay(1000)); // Pour simuler un temps de réponse
  }

  //Pour mettre à jour un User
  updateUser(user: Iuser): Observable<Iuser> {
    return this.http.put('http://localhost:3000/users/' + user.id, user) as Observable<Iuser>; // Paramètres (URL , et le body de la requete)
  }

  //Pour afficher tous les posts
  getUserPosts(id: number): Observable <Ipost[]> {
    return this.http.get<Ipost[]>('http://localhost:3000/users/' + id +'/posts')
    .pipe(delay(1000));
  }

  //Pour afficher un post
  getPost(id: number): Observable <Ipost> {
    return this.http.get('http://localhost:3000/posts/' + id) as Observable<Ipost>;
  }

  //Pour afficher les chips
  getTags(): Observable<Itag[]> {
    return this.http.get('http://localhost:3000/tags') as Observable<Itag[]>;
  }

   //Pour mettre à jour un post
   updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put('http://localhost:3000/posts/' + post.id, post) as Observable<Ipost>; // Paramètres (URL , et le body de la requete)
  }

  //Supprimer un post selon son ID
  deletePost(id:number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id); //Le typage est optionnel
  }

  createPost(post: Ipost):Observable<Ipost> {
    return this.http.post<Ipost>('http://localhost:3000/posts/',post);
  }

  




}
