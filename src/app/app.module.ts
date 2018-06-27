import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisapleBookComponent } from './components/book/display-book/disaple-book/disaple-book.component';
import { DisplayBookComponent } from './components/book/display-book/display-book/display-book.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { ChartComponent } from './components/user/chart/chart.component';
import { AdminComponent } from './components/user/roles/admin/admin.component';
import { SellerComponent } from './components/user/roles/seller/seller.component';
import { CustomerComponent } from './components/user/roles/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DisapleBookComponent,
    DisplayBookComponent,
    BookListComponent,
    RegistrationComponent,
    LoginComponent,
    ChartComponent,
    AdminComponent,
    SellerComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
