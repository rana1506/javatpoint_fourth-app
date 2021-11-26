import { Component, OnDestroy, OnInit } from '@angular/core';
import{Post} from '../../models/post-model';
import{PostService} from '../../services/post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts:Post[]=[]

  private PostSub : Subscription=new Subscription;

  constructor(public postService: PostService) {   }

  ngOnInit() {
      this.posts=this.postService.getPosts();
      this.PostSub=this.postService.getPostUpdatedListener().subscribe((posts: Post[])=>{
          this.posts = posts;
      });
    }

    ngOnDestroy(){
          this.PostSub.unsubscribe();
    }

}
