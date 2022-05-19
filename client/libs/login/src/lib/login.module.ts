import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '@blog-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [LoginFormComponent, SignupFormComponent],
})
export class LoginModule {}
