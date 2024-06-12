import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> cd11c0aa976816c23e0aa4990b4c6b42bc93fca6

@Injectable()
export class TaskService {
  private url = 'http://localhost:3000/api/tasks';

  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  getAlltasks(){
    return this.http.get(this.url);
=======
  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.url).catch(this.handleError);
>>>>>>> cd11c0aa976816c23e0aa4990b4c6b42bc93fca6
  }

  getTaskById(id: string): Observable<any> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
<<<<<<< HEAD
    return this.http.get<any>(`${this.url}/${id}`)
    .catch(this.handleError);
  }


  deletetask(id: string): Observable<void> {
    console.log(`Xóa task với ID: ${id}`); 
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }


  createtask(task:any): Observable<any> {
    return this.http.post(`${this.url}`, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.url}/${task.id}`, task);
}
=======
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
>>>>>>> cd11c0aa976816c23e0aa4990b4c6b42bc93fca6

  
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
