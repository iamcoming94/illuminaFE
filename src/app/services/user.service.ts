import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUserURL = 'https://pb20220403010232.azurewebsites.net/add';
  // private getMediaURL = 'http://localhost:58916/api/user/media';
  private getAllUserURL = 'https://pb20220403010232.azurewebsites.net/all';
  private getUserURL = 'https://pb20220403010232.azurewebsites.net/get';
  private deleteUserURL = "https://pb20220403010232.azurewebsites.net/delete";
  // private editUserURL = "https://pb20220403010232.azurewebsites.net/edit";
  private updateUserURL = 'https://pb20220403010232.azurewebsites.net/update';

  private userData: { userDataOnly: User[] } = { userDataOnly: [] };

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });

  addUser(userObject:any){
    console.log(userObject,'userObject')
    this.http.post(this.addUserURL, userObject).subscribe(data =>{
      console.log(data, 'all data');
    },
    error  => {

      console.log("Error", error);
      
    });

  //   return this.http.post(this.addUserURL, userObject, { headers: this.httpHeaders }).pipe(
  //     map(this.extractData)
  // );
  }

  private extractData(res: any) {
    let body = res;
    return body;
}

  getAllUsers():Observable<User[]>{
    console.log('hit getAllUsers()');
    return this.http.get<User[]>(this.getAllUserURL);
    
  }

  deleteUser(id:any){
    console.log("entered delete user http");
    // return this.http
    //   .delete<User>(this.deleteUserURL + "/" + id, this.httpOptions)
  }

  editUser(id:any, body:any){
    console.log('body',body);
    this.http.put(this.updateUserURL + id, body).subscribe(data => {
      console.log("return after edit",data);
    })
  }
}
