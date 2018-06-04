import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: 'dashboard',
    home: true,
  },
  {
    title: 'Attendance Logs',
    icon: 'ion-clipboard',
    link: '/teacher/attendance/smart-table',
  },
];
