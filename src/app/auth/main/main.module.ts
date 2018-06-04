import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule { }


