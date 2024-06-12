import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class TaskService {
  private url = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient, private router: Router) {}

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.url).catch(this.handleError);
  }

  getTaskById(id: string): Observable<any> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<any>(`${this.url}/${id}`).catch(this.handleError);
  }

  deleteTask(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`);
    return this.http.delete<void>(`${this.url}/${id}`).catch(this.handleError);
  }

  createTask(post: any): Observable<any> {
    return this.http.post<any>(this.url, post).catch(this.handleError);
  }

  updateTask(task: any): Observable<any> {
    if (task._id) {
      const taskId = task._id;
      return this.http.put<any>(`${this.url}/${taskId}`, task).catch(this.handleError);
    } else {
      console.error('ID task không hợp lệ!');
      return Observable.throw('ID task không hợp lệ!');
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
