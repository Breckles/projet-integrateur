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
import { RecipesCardBlockComponent } from './components/recipes-card-block/recipes-card-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { TypesRepasBlockComponent } from './components/types-repas-block/types-repas-block.component';
import { CalendarBlockComponent } from './components/calendar-block/calendar-block.component';
import { RecipesArticleCardComponent } from './components/recipes-card-block/recipes-article-card/recipes-article-card.component';
import { DateadComponent } from './components/datead/datead.component';

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
import { LayoutModule } from '@angular/cdk/layout';

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
    RecipesCardBlockComponent,
    RecipeCreateComponent,
    AddRecipeButtonComponent,
    RecipesArticleCardComponent,
    TypesRepasBlockComponent,
    CalendarBlockComponent,
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
    LayoutModule,
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
