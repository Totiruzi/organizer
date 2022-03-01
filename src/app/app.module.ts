import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AspirationModule } from 'src/app/aspiration/aspiration.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CoreModule } from './core/core.module'
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AspirationModule, 
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
