import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ButtonComponent } from './components/button/button.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePageComponent,
    MenuPageComponent,
    ButtonComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
