import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectService {
  private url = 'http://localhost:3000/api/projects';
  private ur2 = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getAllProject() {
    return this.http.get(this.url);
  }
  getProjectById(id: string): Observable<any> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<any>(`${this.url}/${id}`)
      .catch(this.handleError);
  }
 
  addProject(project: any): Observable<any> {
    return this.http.post(`${this.url}`, project);
  }
  deleteproject(id: string): Observable<void> {
    console.log(`Deleting project with ID: ${id}`); // Log để kiểm tra
    return this.http.delete<void>(`${this.url}/${id}`)
      .catch(this.handleError);
  }
  getUserNameById(userId: string): Observable<any> {
    // Lấy thông tin người dùng theo ID từ API
    return this.http.get<any>(`${this.ur2}/${userId}`);
  }
  updateProject(project: any): Observable<any> {
    return this.http.put(`${this.url}/${project.id}`, project);
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
