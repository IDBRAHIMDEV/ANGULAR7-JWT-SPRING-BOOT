import { JwtInterceptor } from './services/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';
import { EditAddressesComponent } from './components/edit-addresses/edit-addresses.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';
import { RegisterComponent } from './components/register/register.component';
import { AddressComponent } from './components/address/address.component';
import { ModalComponent } from './components/addresses/modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddAddressesComponent,
    ListAddressesComponent,
    EditAddressesComponent,
    PageNotFoundComponent,
    ShowAddressesComponent,
    RegisterComponent,
    AddressComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
