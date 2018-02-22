import { Component, OnInit } from '@angular/core';
import { Ipost } from '../ipost';
import { PostService } from '../post.service';
import { Itag } from '../itag';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  

 post: Ipost;
 tags: Itag[];
 editing: boolean;
  
    constructor(private postService:PostService, private route:ActivatedRoute, private router:Router) { }
  
    ngOnInit() {
      this.postService.postReady$.subscribe(
        post => this.post = this.postService.selectedPost
      );
      this.post=this.postService.selectedPost;

      this.postService.getTags().subscribe(
          tags => ( this.tags = tags) // Il s'agit d'une arrow function: ici la fonction est "tags"
      )

      const urlSegment = this.route.snapshot.url[0];
      if(urlSegment && urlSegment.path ==='edit') {
        this.post = this.postService.selectedPost;
        this.editing=true;
      } else {
        this.editing=false;
        this.post = {
          title:'',
          desc:'',
          text:'',
          img:'',
          onLine:false,
          level:1,
          tagIds:[],
          userId: +this.route.parent.snapshot.paramMap.get('id')
        }
      }
    }
  
    onSubmit() {
      if(this.editing) {
        this.postService.update().subscribe();
      }else {
        this.postService.create(this.post).subscribe(
        newPost => {
          this.router.navigateByUrl('/posts/' + newPost.id);
        
        }
      );
      // 2. Afficher un message de confirmation de ma mise a jour
      // 3; Fermer le formulaire
    }
  
  }
}
