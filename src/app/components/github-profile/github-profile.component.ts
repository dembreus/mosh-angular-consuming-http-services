import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.scss"],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // use if leaving and coming back to the same component to retrieve route parameter
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id :>> ", id);

    // use if staying on the same component to retrieve route parameter
    this.route.paramMap.subscribe((params) => {
      let username = +params.get("username");
      console.log("params :>> ", params);
    });
  }
}
