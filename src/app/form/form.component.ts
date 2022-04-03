import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl('')
  });

  submitted = false;
  userModel = new Object;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private http: HttpClient) {
    this.userForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8)
          ]
        ],
        address: ['', [Validators.required]]        
      }
    );
   }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.userForm.value, null, 2));

    var userDetails = this.userForm.getRawValue();
    
    this.userModel = {
      'name': userDetails.name,
      'phoneNumber': userDetails.phoneNumber,
      "address": userDetails.address      
    }
    
    console.log('submitForm', userDetails.id);
    if(userDetails.id != 0 && userDetails.id != null)
    {
      console.log('entered edit mode', userDetails.id);
      // this.userService.editUser(userDetails.id, this.userModel);
    }

    else if(userDetails.id == null)
    {
      console.log('entered create mode', userDetails.id);
      
      this.userService.addUser(this.userModel);
    }

    // window.location.reload();
    //reload form
    // this.editUserForm();

  }
  
  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }

  editUserForm(){
    this.userForm = this.formBuilder.group({
      id:[''],
      name: [''],
      phoneNumber: [''],
      address: [''],
    });
  }
}
