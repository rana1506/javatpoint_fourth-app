import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post-model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostService){}
  ngOnInit(): void {
  }

  onAddPost( form: NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value.title+' '+ form.value.content)
    this.postsService.addPost(form.value.title, form.value.content )
  }

}
