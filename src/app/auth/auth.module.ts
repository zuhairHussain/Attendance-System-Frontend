import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { MainModule } from './main/main.module';
import { TeacherModule } from './teacher/teacher.module';
import { AdminModule } from './admin/admin.module';
import { PagesRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

const PAGES_COMPONENTS = [
  AuthComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MainModule,
    TeacherModule,
    AdminModule
  ],
  providers: [AuthGuardService, AuthService],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class AuthModule {
}
