import { MatDialogRef } from '@angular/material/dialog';
import { authService } from './../authService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  
  signupForm : FormGroup = new FormGroup({});

  constructor(private auth: authService, public dialogRef : MatDialogRef<SignupFormComponent>) {}

  ngOnInit(): void { 
    this.initForm();
  }

  private initForm(){
    let username = "";
    let firstName = "";
    let lastName = "";
    let password = "";
    let confirm_password = "";
    this.signupForm = new FormGroup({
      'username' : new FormControl(username, Validators.required),
      'firstName' : new FormControl(firstName),
      'lastName' : new FormControl(lastName),
      'password': new FormControl(password, Validators.required),
      'confirm_password': new FormControl(confirm_password, Validators.required)
    })
  }

  createUser(){
    let isUserCreated = this.auth.create_user(this.signupForm);
    if(isUserCreated){
      console.log("User is created successfully")
    }else {
      console.log("Error in creating user")
    }
    this.closeDialog()
    
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
