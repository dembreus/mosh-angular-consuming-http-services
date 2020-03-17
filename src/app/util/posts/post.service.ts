import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostComponent } from "src/app/components/posts/post/post.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";
  posts: Observable<PostComponent[]>;
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostComponent[]>(this.url);
  }

  createPost(post: PostComponent) {
    return this.http.post<PostComponent>(this.url, post);
  }

  updatePost(post: PostComponent) {
    return this.http.put<PostComponent>(`${this.url}/${post.id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete<PostComponent>(`${this.url}/${id}`);
  }
}
