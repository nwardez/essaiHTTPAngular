import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Ipost } from '../ipost';
import { Router } from '@angular/router';
//import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Ipost[];
  getPostSubscription; //Déclare le retour de subcribe (pas obligatoire)

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.getPostSubscription = this.userService;
    this.userService.getUserPosts().subscribe(posts => this.posts =posts)
  }

  selectPost(id: number) {
    this.router.navigate(['/posts',id]);  //Avec la methode NAVIGATE
  }

  

}
