import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { firebase, FirebaseUIModule } from 'firebaseui-angular';

import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireAuthModule,
  SETTINGS as AUTH_SETTINGS,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { WeekblockComponent } from './components/weekblock/weekblock.component';
import { RecipeListDisplayComponent } from './components/recipe/recipe-list-display/recipe-list-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarBlockComponent } from './components/calendar-block/calendar-block.component';
import { RecipeCardComponent } from './components/recipe/recipe-card/recipe-card.component';
import { DateadComponent } from './components/datead/datead.component';
import { AddRecipeButtonComponent } from './components/recipe/add-recipe-button/add-recipe-button.component';
import { RecipeFormComponent } from './components/recipe/recipe-form/recipe-form.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

import { AddToMenuButtonComponent } from './components/menu/add-to-menu-button/add-to-menu-button.component';

// Material components
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MenuComponent } from './components/menu/menu.component';
import { CalendrierComponent } from './components/menu/calendrier/calendrier.component';
import { AddRecipeToMenuModalContentComponent } from './components/menu/add-recipe-to-menu-modal-content/add-recipe-to-menu-modal-content.component';
import { RecipeDetailModalContentComponent } from './components/recipe/recipe-detail-modal-content/recipe-detail-modal-content.component';
import { UserRecipesComponent } from './components/recipe/user-recipes/user-recipes.component';
import { BannerHomePageComponent } from './components/banner-home-page/banner-home-page.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    // Currently, only email authentication is enabled
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  // tosUrl: '<your-tos-link>',
  // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  // credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePageComponent,
    MenuPageComponent,
    AuthComponent,
    HeaderComponent,
    WeekblockComponent,
    DateadComponent,
    FooterComponent,
    RecipeListDisplayComponent,
    RecipeFormComponent,
    AddRecipeButtonComponent,
    RecipeCardComponent,
    CalendarBlockComponent,
    RecipesPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    AddToMenuButtonComponent,
    MenuComponent,
    CalendrierComponent,
    AddRecipeToMenuModalContentComponent,
    RecipeDetailModalContentComponent,
    UserRecipesComponent,
    BannerHomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: AUTH_SETTINGS,
      useValue: { appVerificationDisabledForTesting: true },
    },
    // For testing purposes
    // { provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['http://localhost', 9099] : undefined },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
