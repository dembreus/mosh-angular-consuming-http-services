import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";

@Injectable({
  providedIn: "root"
})
export class UserService extends DataService {
  constructor(http: HttpClient) {
    super("https://api.github.com/users/dembreus/followers", http);
  }
}
