import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Ipost } from './ipost';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

  constructor(private api: ApiService) { }

  selectedPost:Ipost;

  postReady$: Subject<Ipost> = new Subject<Ipost>(); //Le dollar parce que c'est un Observable

  getPost(id): Observable<Ipost> { //Le pipe permet de faire des methodes à la voléee .. Ici tap()
    return this.api.getPost(id).pipe(
      tap( p => this.selectedPost = p),
      tap( post => this.postReady$.next(post))
    ); //On intercepte la requete pour fournir la reponse au user
   }

   update() {
    return this.api.updatePost(this.selectedPost);
  }

  getTags() {
    return this.api.getTags();
  }

  delete(id:number):any {   //Mieux que SelectedPost
    return this.api.deletePost(id);
  }

  create(post:Ipost):  Observable<Ipost> {
    return this.api.createPost(post);
  }

  

 

}
