import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post} from '../../models/post.model';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  //posts : Post[] = [];
  post: any;

  constructor(public postService: PostService, public route:ActivatedRoute) {
   }

   private mode= 'create';
   private postId: any;
   ngOnInit(){
         this.route.paramMap.subscribe((paramMap: ParamMap)=>{
           if(paramMap.has('postId')){
             this.mode='edit';
             this.postId = paramMap.get('postId');
             this.post = this.postService.getPost(this.postId);
            }else{
             this.mode = 'create';
             this.postId = null;
           }
         });
  }

  /*onAddPost( form: NgForm){
    if(form.invalid){
      return;
    }
    this.postService.addPost(form.value.title, form.value.content )
  }*/
  onAddPost( form: NgForm){
    if(form.invalid){
      return;
    }
    if(this.mode==="create"){
      this.postService.addPost(form.value.title, form.value.content );
    }else{
      this.postService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
    form.resetForm();
  }
}
