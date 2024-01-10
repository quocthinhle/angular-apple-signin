import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CallbackComponent } from '../callback/callback.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'apple-signin', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }