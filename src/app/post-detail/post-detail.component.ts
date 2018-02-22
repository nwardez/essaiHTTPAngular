import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Ipost } from '../ipost';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Ipost;
  errText: string;

  constructor(private route: ActivatedRoute,private postService: PostService,private router: Router, public dialog:MatDialog) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id');

    this.postService.getPost(id).subscribe(
      post => this.post=post,
      err => this.errText = 'Ce post n\'existe pas'
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog est closed: ', result);
      if(result) {
        this.postService.delete(this.post.id).subscribe(
          () => this.router.navigate(['../'], {relativeTo: this.route})
        );
      }
    });
  }

 

  deletePost() {
    this.openDialog();
  }

}
