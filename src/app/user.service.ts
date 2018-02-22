import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Ipost } from './ipost';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  constructor(private api: ApiService) { }

  selectedUser: Iuser;

  userReady$=new Subject<Iuser>();

  getUser(id): Observable<Iuser> {
   return this.api.getUser(id).pipe(
     tap( u => this.selectedUser = u),
     tap( post => this.userReady$.next(post))
    ); //On intercepte la requete pour fournir la reponse au user
  }

  update() {
    console.log('this.selectedUser: ', this.selectedUser);
    return this.api.updateUser(this.selectedUser);
  }

  getPosts(id): Observable<Ipost[]> {
  
    return this.api.getUserPosts(id).pipe(tap(posts => console.log(posts)));
  }

  getUserPosts() {
    return this.api.getUserPosts(this.selectedUser.id);
  }

  

}
