import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AspirationModule } from 'src/app/aspiration/aspiration.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AspirationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
