import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TeacherComponent } from './teacher.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    TeacherComponent
  ],
})
export class TeacherModule { }


