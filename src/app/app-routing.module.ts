import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { UserLoggedInGuard } from './guards/user-logged-in.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'menu',
    component: MenuPageComponent,
    canActivate: [UserLoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
