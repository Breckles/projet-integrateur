import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import {firebase, FirebaseUIModule} from 'firebaseui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule, SETTINGS as AUTH_SETTINGS, USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/compat/auth";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    // Currently, only email authentication is enabled
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
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
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    {provide: AUTH_SETTINGS, useValue: {appVerificationDisabledForTesting: true}}
    // For testing purposes
    // { provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['http://localhost', 9099] : undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
