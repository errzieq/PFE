import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './vendeur/charts/charts.component';
import { DashboardComponent } from './vendeur/dashboard/dashboard.component';
import { ProductsComponent } from './vendeur/tables/products/products.component';
import { ChartsComponentAdmin } from './admin/charts/charts.component';
import { DashboardComponentAdmin } from './admin/dashboard/dashboard.component';
import { ProductsComponentAdmin } from './admin/tables/products/products.component';
import { UsersComponent } from './admin/tables/users/users.component';
import { MetausersComponent } from './admin/tables/metausers/metausers.component';
import { SidebarModule } from 'ng-sidebar';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './header/ads/ads.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { CategoriesMenuComponent } from './header/categories-menu/categories-menu.component';
import { DropdownNavbarComponent } from './header/dropdown-navbar/dropdown-navbar.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchFormComponent } from './header/search-form/search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import {NgxValidationErrorsModule} from '@xtream/ngx-validation-errors';
import { ProfilComponent } from './client/profil/profil.component';
import { SettingsComponent } from './client/profil/settings/settings.component';
import { RatedComponent } from './client/profil/rated/rated.component';
import { LikedComponent } from './client/profil/liked/liked.component';
import { PanierComponent } from './client/profil/panier/panier.component';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    VendeurComponent,
    AdminComponent,
    ChartsComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    MetausersComponent,
    FooterComponent,
    AdsComponent,
    CarouselComponent,
    CategoriesMenuComponent,
    DropdownNavbarComponent,
    HeaderComponent,
    SearchFormComponent,
    RegisterComponent,
    LoginComponent,
    ChartsComponentAdmin,
    DashboardComponentAdmin,
    ProductsComponentAdmin,
    ProfilComponent,
    SettingsComponent,
    RatedComponent,
    LikedComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    SidebarModule,
    NgbModule,
    NgxValidationErrorsModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
