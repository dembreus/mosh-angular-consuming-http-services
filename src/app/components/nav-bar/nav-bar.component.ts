import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/core/route.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
routes: IRoute[];

  constructor() { }

  ngOnInit() {
    this.routes = [
      {name: "Home", path: "/"},
      {name: "Users", path: "/users"},
      {name: "Posts", path: "/posts"},
    ]
  }

}
