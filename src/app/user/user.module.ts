import  { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule {}
