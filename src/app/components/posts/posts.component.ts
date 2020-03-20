import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AppError } from "../../core/error/app-error";
import { BadRequest } from "../../core/error/bad-request-error";
import { NotFoundError } from "../../core/error/not-found-error";
import { PostService } from "../../services/posts/post.service";
import { PostComponent } from "./post/post.component";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: any;
  form;
  constructor(private postService: PostService, fb?: FormBuilder) {
    this.form = fb.group({
      userid: [0],
      id: [0],
      title: [""],
      body: [""]
    });
  }

  ngOnInit() {
    this.postService.getAll().subscribe(
      data => (this.posts = data),
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("The post was not found.");
        } else throw error;
      }
    );
  }

  create(_post: HTMLFormElement) {
    const post: PostComponent = {
      userid: Math.round(Math.random() * Date.now()),
      id: Math.round(Math.random() * Date.now()),
      title: _post.value.title,
      body: _post.value.body
    };

    _post.value.title = "";
    _post.value.body = "";
    this.posts.splice(0, 0, post);

    this.postService.create(post).subscribe(
      (data: any) => (post["id"] = data.id),
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequest) {
          this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  update(_post) {
    this.postService.update(_post).subscribe(
      data => console.log("data ", data),
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("The post was not found.");
        } else {
          throw error;
        }
      }
    );
  }

  delete(_post) {
    let index = this.posts.indexOf(_post);
    this.posts.splice(index, 1);
    this.postService.delete(345).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, _post);
      if (error instanceof NotFoundError) {
        alert("The post has already been deleted.");
      } else {
        throw error;
      }
    });
  }
}
