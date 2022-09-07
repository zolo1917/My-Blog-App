import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { authService } from '../authService';

@Component({
  selector: 'blog-app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({})

  constructor(public dialogRef : MatDialogRef<LoginFormComponent>, private auth : authService) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    let username : string = ""
    let password : string = ""
    this.loginForm = new FormGroup({
      'username' : new FormControl(username),
      'password' : new FormControl(password)
    })
  }

  login() {
    const output = this.auth.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);
    this.dialogRef.close()
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
