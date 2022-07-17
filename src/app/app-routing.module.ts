import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './guard/token.guard';
import { BookingAdminComponent } from './view/admin/booking-admin/booking-admin.component';
import { BookingComponent } from './view/booking/booking.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MenuComponent } from './view/menu/menu.component';
import { PlaceComponent } from './view/place/place.component';
import { RegisterComponent } from './view/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account/login',
    component: LoginComponent,
  },
  {
    path: 'account/register',
    component: RegisterComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [TokenGuard],
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'place',
    component: PlaceComponent,
  },
  {
    path: 'admin/booking',
    component: BookingAdminComponent,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
