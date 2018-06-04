import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: 'dashboard',
    home: true,
  },
  {
    title: 'Students',
    icon: 'ion-person',
    link: '/admin/students/smart-table',
  },
  {
    title: 'Teachers',
    icon: 'ion-ios-book-outline',
    link: '/admin/teachers/smart-table',
  },
  {
    title: 'Attendance Logs',
    icon: 'ion-clipboard',
    link: '/admin/attendance/smart-table',
  },
];
