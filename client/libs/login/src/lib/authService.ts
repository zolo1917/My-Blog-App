import { FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class authService {

    constructor(private httpClient : HttpClient){
    }

    private setHeaders(){
      const header = new Headers();
      header.append('Content-Type', 'application/json')
      header.append('token', <string>localStorage.getItem('token'))
      return header
    }

    login(username: string, password : string){
        const request : FormData =new FormData();
        request.append('username', username)
        request.append('password', password)
        let response : any;
        this.httpClient.post("http://localhost:8000/login", request).subscribe((response) => {
            localStorage.setItem('token', response.toString());
            console.log(localStorage.getItem('token'));
        })
        console.log(response)
        return response
    }
    // This is the method for the application
    create_user(newUserForm : FormGroup){
        const passwordValue = newUserForm.get('password')?.value;
        const confirmPassword = newUserForm.get('confirm_password')?.value;
        if(passwordValue !== confirmPassword){
            return false;
        }
        const request = {
            'username' : newUserForm.get('username')?.value,
            'password' : newUserForm.get('password')?.value,
            'first_name': newUserForm.get('firstName')?.value,
            'last_name': newUserForm.get('lastName')?.value
        }
        this.httpClient.post("http://localhost:8000/users/createuser",request).subscribe(data =>{
            console.log(data)
        })
        return true;
    }

}
