
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from 'libs/login/src/lib/login-form/login-form.component';
import { SignupFormComponent } from 'libs/login/src/lib/signup-form/signup-form.component';

@Component({
  selector: 'blog-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'blog';
  token : string = "";
  channels = [
    {
      channel_id: 1,
      channelName: "tech"
    },
    {
      channel_id: 2,
      channelName: "Life"
    },
    {
      channel_id: 3,
      channelName: "Cloud"
    },
    {
      channel_id: 4,
      channelName: "python"
    },
    {
      channel_id: 5,
      channelName: "angular"
    }
  ]

  posts = [{
    id : 1, 
    title : "Post 1",
    textContent : "This is the content of the post 1"
  },
  {
    id : 2, 
    title : "Post 2",
    textContent : "This is the content of the post 2"
  },
  {
    id : 3, 
    title : "Post 3",
    textContent : "This is the content of the post 3"
  },
  {
    id : 4, 
    title : "Post 4",
    textContent : "This is the content of the post 4"
  },
  {
    id : 5, 
    title : "Post 5",
    textContent : "This is the content of the post 5"
  },
  {
    id : 6, 
    title : "Post 6",
    textContent : "This is the content of the post 6"
  }
]
  
  constructor(public dialog : MatDialog){}

  login(){
    const dialogRef = this.dialog.open(LoginFormComponent, {width :'50%', height: 'auto'});
    dialogRef.afterClosed().subscribe(result =>{
      console.log('the dialog was closed');
      this.token = result
    })
  }

  signUp(){
    const dialogRef = this.dialog.open(SignupFormComponent, {width : '80%', height:'auto'}) 
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The sign up form is closed')
      this.token = result
    })
  }

  ngOnInit(): void {
  }

}
