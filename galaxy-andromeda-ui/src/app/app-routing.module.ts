import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationUiComponent } from './pages/user-login-ui/user-registration/user-registration-ui/user-registration-ui.component';
import { UserLoginComponent } from './pages/user-login-ui/user-login/user-login.component';
import { UserDashboardUiComponent } from './pages/user-login-ui/user-dashboard/user-dashboard-ui/user-dashboard-ui.component';
import { NormalUserGuard } from './guard-interceptor/normal-user.guard';

const routes: Routes = [
  {
    path:'user-registration',
    component:UserRegistrationUiComponent,
    pathMatch:'full'
  },
  {
    path:'user-login',
    component:UserLoginComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashboardUiComponent,
    canActivate:[NormalUserGuard],
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
