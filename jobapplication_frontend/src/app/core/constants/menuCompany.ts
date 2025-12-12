import { MenuItem } from "src/app/Model/menu-model";

export class MenuCompany {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Profile',
          route: '/company-component/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/eye.svg',
          label: 'Dashboard',
          route: '/company-component/company-dashboard',
        },
      ],
    },
    {
      group: 'Paramètres',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Paramètres Profile',
          route: '/company-component/company-settings',
        }
      ],
    },
  ];
}
