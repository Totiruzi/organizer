import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AspirationModule } from 'src/app/aspiration/aspiration.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CoreModule } from './core/core.module';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { LoginComponent } from 'src/app/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    SignupComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AspirationModule, 
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
