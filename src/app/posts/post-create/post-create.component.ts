import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post} from '../../models/post.model';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  posts : Post[] = [];

  constructor(public postService: PostService) {
   }
   title="";
  ngOnInit(): void {
  }

  onAddPost( form: NgForm){
    if(form.invalid){
      return;
    }
    this.title=form.value.title;
    console.log('inside post-create')
    this.postService.addPost(form.value.title, form.value.content )
  }
}
