import { Component, OnInit } from "@angular/core";
import { AppError } from "../../core/error/app-error";
import { BadRequest } from "../../core/error/bad-request-error";
import { NotFoundError } from "../../core/error/not-found-error";
import { UserService } from "src/app/services/users/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe(
      data => (this.users = data),
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("The post was not found.");
        } else throw error;
      }
    );
  }
}
