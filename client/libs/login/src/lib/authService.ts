import { FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class authService {

    constructor(private httpClient : HttpClient){
    }

    login(username: string, password : string){
        let request : FormData;
        request = new FormData()
        request.append('username', username)
        request.append('password', password)
        let response : any;
        this.httpClient.post("http://localhost:8000/login", request).subscribe(data => {
            console.log(data)
            response = data
        })
        console.log(response)
        return response
    }
    // This is the method for the application
    create_user(newUserForm : FormGroup){
        let passwordValue = newUserForm.get('password')?.value;
        let confirmPassword = newUserForm.get('confirm_password')?.value;
        if(passwordValue !== confirmPassword){
            return false;
        }
        let request = {
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