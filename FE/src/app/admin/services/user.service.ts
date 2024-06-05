import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IUsers } from '../entities/user'; // Đảm bảo đường dẫn đúng

@Injectable()
export class UsersService {
  private url = 'http://localhost:3000/api/users';
  private url2 = 'http://localhost:3000/api/user';
  constructor(private http: HttpClient) { }

  getAllusers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url)
      .map(response => response as IUsers[])
      .catch(this.handleError);
  }

//   getUserById(id: string): Observable<IUsers> {
//     if (!id) {
//       return Observable.throw('ID không hợp lệ');
//     }
//     return this.http.get<IUsers>(`${this.url2}/${id}`)
//       .catch(this.handleError);
//   }
//   createuser(user: IUsers): Observable<IUsers> {
//     return this.http.post<IUsers>(this.url, user)
//       .catch(this.handleError);
//   }

//   deleteuser(id: string): Observable<void> {
//     console.log(`Deleting project with ID: ${id}`); // Log để kiểm tra
//     return this.http.delete<void>(`${this.url}/${id}`)
//       .catch(this.handleError);
//   }
  
//   updateuser(user: IUsers): Observable<IUsers> {
//     if (user._id && user._id.$oid) {
//       const projectId = user._id.$oid;
//       return this.http.put<IProject>(`${this.url}/${projectId}`, project)
//         .catch(this.handleError);
//     } else {
//       // Xử lý khi _id không hợp lệ
//       console.error('ID bài viết không hợp lệ!');
//       return Observable.throw('ID bài viết không hợp lệ!');
//     }


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

