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
import {ProfilComponent} from './client/profil/profil.component'
import {LikedComponent} from './client/profil/liked/liked.component'
import {RatedComponent} from './client/profil/rated/rated.component'
import {PanierComponent} from './client/profil/panier/panier.component'
import {SettingsComponent} from './client/profil/settings/settings.component'
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {path: '',redirectTo: "/app-login",pathMatch: 'full'},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-vendeur', canActivate: [AuthGuard],component: VendeurComponent, children:[
    {path: '',redirectTo: "app-dashboard",pathMatch: 'full'},
    {path: 'app-charts', canActivate: [AuthGuard],component: ChartsComponent},
    {path: 'app-dashboard', canActivate: [AuthGuard],component: DashboardComponent},
    {path: 'app-products', canActivate: [AuthGuard],component: ProductsComponent},
  ]},
  {path: 'app-admin', canActivate: [AuthGuard],component: AdminComponent,children:[
    {path: '',redirectTo: "app-dashboardadmin",pathMatch: 'full'},
    {path: 'app-productsadmin', canActivate: [AuthGuard],component: ProductsComponentAdmin},
    {path: 'app-chartsadmin', canActivate: [AuthGuard],component: ChartsComponentAdmin},
    {path: 'app-dashboardadmin', canActivate: [AuthGuard],component: DashboardComponentAdmin},
    {path: 'app-users', canActivate: [AuthGuard],component: UsersComponent},
  {path: 'app-metausers', canActivate: [AuthGuard],component: MetausersComponent}
  ]},
  {path: 'app-profil', canActivate: [AuthGuard],component: ProfilComponent,children:[
    {path: '',redirectTo: "app-panier",pathMatch: 'full'},
    {path: 'app-liked', canActivate: [AuthGuard],component: LikedComponent},
    {path: 'app-rated', canActivate: [AuthGuard],component: RatedComponent},
    {path: 'app-panier', canActivate: [AuthGuard],component: PanierComponent},
    {path: 'app-settings', canActivate: [AuthGuard],component: SettingsComponent}
  ]}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
