import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  imports: [
    ThemeModule,
    WebcamModule
  ],
  declarations: [
    DashboardComponent,
    ContactsComponent,
  ],
})
export class DashboardModule { }


