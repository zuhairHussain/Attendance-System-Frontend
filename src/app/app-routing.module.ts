import { ExtraOptions, RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'admin', loadChildren: 'app/admin/pages.module#PagesModule', canActivate: [AuthGuard]  },
  { path: 'teacher', loadChildren: 'app/teacher/pages.module#PagesModule', canActivate: [AuthGuard]  },
  { path: '', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
