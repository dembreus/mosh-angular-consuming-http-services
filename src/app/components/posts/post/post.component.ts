import { Component } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements IPost {
  userid: number;
  id: number;
  title: string;
  body: string;

  constructor(userid?: number, id?: number, title?: string, body?: string) {
    this.userid = userid;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
