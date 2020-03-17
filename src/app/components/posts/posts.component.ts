import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PostService } from "./../../util/posts/post.service";
import { PostComponent } from "./post/post.component";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: any;
  form;
  constructor(private service: PostService, fb?: FormBuilder) {
    this.form = fb.group({
      userid: [0],
      id: [0],
      title: [""],
      body: [""]
    });
  }

  ngOnInit() {
    this.service.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("The post was not found.");
        } else {
          alert("An unexpected error occurred.");
        }
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

    this.service.createPost(post).subscribe(
      data => {
        this.posts.splice(0, 0, data);
      },
      (error: Response) => {
        if (error.status === 400) {
          this.form.setErrors(error.json());
        } else {
          alert("An unexpected error occurred.");
        }
      }
    );
  }

  update(_post) {
    this.service.updatePost(_post).subscribe(
      data => {
        console.log("data ", data);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("The post was not found.");
        } else {
          alert("An unexpected error occurred.");
        }
      }
    );
  }

  delete(_post) {
    this.service.deletePost(_post.id).subscribe(
      data => {
        let index = this.posts.indexOf(_post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("The post has already been deleted.");
        } else {
          alert("An unexpected error occurred.");
        }
      }
    );
  }
}
