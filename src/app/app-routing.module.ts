import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'books', loadChildren: () => import('src/app/aspiration/aspiration.module').then(m => m.AspirationModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
