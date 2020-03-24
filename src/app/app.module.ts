import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/posts/post/post.component";
import { PostService } from "./services/posts/post.service";
import { AppErrorHandler } from "./core/error/app-error-handler";
import { UsersComponent } from "./components/users/users.component";
import { UserService } from "./services/users/user.service";

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    UserService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
