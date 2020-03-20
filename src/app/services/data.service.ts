import { Injectable, Component } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppError } from "../core/error/app-error";
import { NotFoundError } from "src/app/core/error/not-found-error";
import { BadRequest } from "src/app/core/error/bad-request-error";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http
      .post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http
      .put(`${this.url}/${resource.id}`, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) return throwError(new BadRequest(error.message));
    if (error.status === 404) return throwError(new NotFoundError());
    return throwError(new AppError(error.message));
  }
}
