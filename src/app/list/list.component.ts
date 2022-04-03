import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  dataSource = new MatTableDataSource<any>();
  data: any;

  constructor(private userService: UserService) { 
    
   }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    const userObservable = this.userService.getAllUsers();
    userObservable.subscribe((userData: User[]) => {
            this.users = userData;
        });
  }

  deleteUser(data:any){
    // var index : any;
    // index = this.users.map(x => {return x.name}).indexOf(data.name);
    //  return this.userService.deleteUser(data.id).subscribe(res => {
    //   this.users.splice(index, 1)
    //    console.log('User deleted!')
    //  })
  }
  
}
