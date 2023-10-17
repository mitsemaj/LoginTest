import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component'; // Import your login component here
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // // Add other routes as needed
  // // ...
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page on startup
  // { path: '**', redirectTo: '/login' }, // Redirect to the login page for unknown routes
  // { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
