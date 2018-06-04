import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: 'auth/dashboard',
    home: true,
  },
  {
    title: 'Students',
    icon: 'ion-person',
    link: '/auth/students/smart-table',
  },
  {
    title: 'Teachers',
    icon: 'ion-ios-book-outline',
    link: '/auth/teachers/smart-table',
  },
  {
    title: 'Attendance Logs',
    icon: 'ion-clipboard',
    link: '/auth/attendance/smart-table',
  },
];
