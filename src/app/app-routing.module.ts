import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PostComponent } from "./components/posts/post/post.component";
import { PostsComponent } from "./components/posts/posts.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "posts/:id", component: PostComponent },
  { path: "posts", component: PostsComponent },
  { path: "users", component: UsersComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
