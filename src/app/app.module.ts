import { StopReadingComponent } from './aspiration/books/current-book/stop-reading.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AspirationModule } from './aspiration/aspiration.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

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
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    AspirationModule, 
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopReadingComponent]
})
export class AppModule {}
