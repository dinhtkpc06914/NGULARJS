import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private url = 'http://localhost:3000/api/users';
  private url2 = 'http://localhost:3000/api/user';
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url).catch(this.handleError);
  }

  getUserById(id: string): Observable<any> {
    if (!id) {
      return Observable.throw('ID không hợp lệ');
    }
    return this.http.get<any>(`${this.url2}/${id}`).catch(this.handleError);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user).catch(this.handleError);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user).catch(this.handleError);
  }

  deleteUser(id: string): Observable<void> {
    console.log(`Xóa user với ID: ${id}`); 
    return this.http.delete<void>(`${this.url}/${id}`).catch(this.handleError);
  }
  
  updateUser(user: any): Observable<any> {
    if (user._id) {
      const userId = user._id;
      return this.http.put<any>(`${this.url}/${userId}`, user).catch(this.handleError);
    } else {
      // Xử lý khi _id không hợp lệ
      console.error('ID user không hợp lệ!');
      return Observable.throw('ID user không hợp lệ!');
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
