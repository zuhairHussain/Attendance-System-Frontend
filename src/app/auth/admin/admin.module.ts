import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule { }


