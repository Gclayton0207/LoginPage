import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {
    path: 'contact',
    canActivate: [AuthGuard],
    component: ContactComponent,
  },
  {
    path: 'access',
    loadChildren: () =>
      import('./access/access.module').then((res) => res.AccessModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((res) => res.LoginComponent),
  },
  {
    path: '**',
    component: StatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
