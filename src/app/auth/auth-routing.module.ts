import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { MainComponent } from './main/main.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: 'auth',
    component: MainComponent,
  },
  {
    path: 'auth/teacher',
    component: TeacherComponent,
  },{
    path: 'auth/admin',
    component: AdminComponent, 
  }, {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
