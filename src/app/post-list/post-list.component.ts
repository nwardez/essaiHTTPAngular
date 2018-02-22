import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Ipost } from '../ipost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private api: ApiService) { }
  
    posts : Ipost[] = [];
  
    ngOnInit() {
      this.api.getPosts().subscribe( (data: Ipost[])=> {
        this.posts = data;
      });
    }

}
