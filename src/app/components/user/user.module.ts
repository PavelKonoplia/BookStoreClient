import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBookComponent } from 'src/app/components/book/display-book/display-book.component';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegistrationComponent } from 'src/app/components/user/registration/registration.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';

@NgModule({
  imports: [
    CommonModule,
    // DataRoutingModule
  ],
  declarations: [LoginComponent, RegistrationComponent, PersonalPageComponent],
  exports: [LoginComponent, RegistrationComponent],
  providers: [],
})
export class UserModule { }
