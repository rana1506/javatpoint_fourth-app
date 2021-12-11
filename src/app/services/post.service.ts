import {  HttpClient} from '@angular/common/http';
import {  Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import {  Subject } from 'rxjs';
import{Post} from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  private posts: Post[] = []
  private postUpdated= new Subject<Post[]>();
  /*private posts: Post[] = [
    {title: 'First Post', content:'This is the first post\'s content'},
    {title: 'Second Post', content:'This is the second post\'s content'},
    {title: 'Third Post', content:'This is the third post\'s content'}
  ];*/

  getPosts(){
    this.http.get<{message: string, posts: Post[] }>('http://localhost:3000/api/posts')
    .subscribe((PostData)=>{
        this.posts = PostData.posts
        this.postUpdated.next([...this.posts]);
    });
    return this.posts;
  }
  getPost(id: string){
    return {...this.posts.find(p =>p.id ===id)};
  }
  getPostUpdatedListener(){
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post={id: "null", title: title, content: content};
    this.http.post<{message: string, postId:string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData)=>{
      //const id = responseData.postId;
      post.id = responseData.postId;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);

  });
  }
  updatePost( id: string, title:string, content:string){
    const post: Post = {id:id, title:title, content:content};
  }
}

