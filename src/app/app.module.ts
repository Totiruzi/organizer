import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AspirationModule } from 'src/app/aspiration/aspiration.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AspirationModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
