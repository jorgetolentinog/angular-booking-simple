import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './view/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './view/login/login.component';
import { MenuComponent } from './view/menu/menu.component';
import { BookingComponent } from './view/booking/booking.component';
import { HomeComponent } from './view/home/home.component';
import { BookingAdminComponent } from './view/admin/booking-admin/booking-admin.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './component/footer/footer.component';
import { StateNamePipe } from './pipe/state-name.pipe';
import { PlaceComponent } from './view/place/place.component';
import { ProductMenuComponent } from './view/menu/product-menu/product-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    BookingComponent,
    HomeComponent,
    BookingAdminComponent,
    LayoutComponent,
    FooterComponent,
    StateNamePipe,
    PlaceComponent,
    ProductMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
