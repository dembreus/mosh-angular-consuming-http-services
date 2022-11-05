import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PostComponent } from "./components/posts/post/post.component";
import { PostsComponent } from "./components/posts/posts.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "followers", component: GithubFollowersComponent },
  { path: "profile/:username", component: GithubProfileComponent },
  { path: "posts/:id", component: PostComponent },
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
