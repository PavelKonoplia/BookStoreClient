import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegistrationComponent } from 'src/app/components/user/registration/registration.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { UserRoutingModule } from './user-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookModule } from '../book/book.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ChartComponent } from './chart/chart.component';
import { EnumToArrayPipe } from 'src/app/common/enum-to-array.pipe';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    BookModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent,
    RegistrationComponent,
    PersonalPageComponent,
    ManageUsersComponent,
    ChartComponent,
    SellerComponent,
    EnumToArrayPipe
  ],
  exports: [LoginComponent,
    RegistrationComponent,
    PersonalPageComponent,
    ManageUsersComponent,
    ChartComponent,
    SellerComponent
  ],
  providers: [],
})
export class UserModule { }
