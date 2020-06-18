import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AddAddressesComponent } from './components/add-addresses/add-addresses.component';
import { ShowAddressesComponent } from './components/show-addresses/show-addresses.component';
import { ListAddressesComponent } from './components/list-addresses/list-addresses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/addresses", pathMatch: "full", canActivate: [AuthGuard] },
  { path: "addresses", children: [
     { path:"", component: ListAddressesComponent },
     { path:"create", component: AddAddressesComponent },
     { path:"{id}/edit", component: ListAddressesComponent },
     { path:"{id}", component: ShowAddressesComponent },
    ], canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [AfterAuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
