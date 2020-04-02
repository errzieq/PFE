import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './vendeur/charts/charts.component';
import { ChartsComponentAdmin } from './admin/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './vendeur/dashboard/dashboard.component';
import { DashboardComponentAdmin } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './vendeur/tables/products/products.component';
import { ProductsComponentAdmin } from './admin/tables/products/products.component';
import { UsersComponent } from './admin/tables/users/users.component';
import { MetausersComponent } from './admin/tables/metausers/metausers.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import  {VendeurComponent} from './vendeur/vendeur.component';
import  {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '',redirectTo: "/app-login",pathMatch: 'full'},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-vendeur', component: VendeurComponent, children:[
    {path: '',redirectTo: "app-dashboard",pathMatch: 'full'},
    {path: 'app-charts', component: ChartsComponent},
    {path: 'app-dashboard', component: DashboardComponent},
    {path: 'app-products', component: ProductsComponent},
  ]},
  {path: 'app-admin', component: AdminComponent,children:[
    {path: '',redirectTo: "app-dashboardadmin",pathMatch: 'full'},
    {path: 'app-productsadmin', component: ProductsComponentAdmin},
    {path: 'app-chartsadmin', component: ChartsComponentAdmin},
    {path: 'app-dashboardadmin', component: DashboardComponentAdmin},
    {path: 'app-users', component: UsersComponent},
  {path: 'app-metausers', component: MetausersComponent}
  ]}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
