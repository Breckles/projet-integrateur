import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { UserLoggedInGuard } from './guards/user-logged-in.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { RecipesPageComponent } from 'pages/recipes-page/recipes-page.component';
import { ProfilePageComponent } from 'pages/profile-page/profile-page.component';
import { AdminPageComponent } from 'pages/admin-page/admin-page.component';
import { UserIsAdminGuard } from 'guards/user-is-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'menu',
    component: MenuPageComponent,
    canActivate: [UserLoggedInGuard],
  },
  { path: 'recipes', component: RecipesPageComponent },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [UserLoggedInGuard],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [UserIsAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
