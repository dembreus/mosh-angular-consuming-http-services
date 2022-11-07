import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/users/user.service";
import { Observable, combineLatest } from "rxjs";

@Component({
  selector: "app-github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.scss"],
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    // Observable.combineLatest(this.route.paramMap, this.route.queryParamMap)
    //   .subscribe(([this.route.paramMap, this.route.queryParamMap]) => {
    //     let id = combined[0].get("id");
    //     let page = combined[0].get("page");
    //     this.service.getAll();
    //   })
    //   .subscribe((followers) => (this.followers = followers));
  }
}
