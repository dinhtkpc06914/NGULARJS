import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ITask } from '../entities/task'


@Injectable()
export class TaskService {
  private url = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}


  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.url).catch(this.handleError);
  }

  getTaskById(id: string): Observable<any> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }

    return this.http.get<any>(`${this.url}/${id}`)
    .catch(this.handleError);
  }

  deleteTask(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`);
    return this.http.delete<void>(`${this.url}/${id}`).catch(this.handleError);
  }


  createtask(task:any): Observable<any> {
    return this.http.post(`${this.url}`, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.url}/${task.id}`, task);
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
