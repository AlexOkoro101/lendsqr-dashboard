import { DashboardRoutesProps } from './types/models';

export const dashboardRoutes: DashboardRoutesProps = {
  mainRoutes: [
    {
      name: 'Switch Organization',
      icon: 'briefcase',
      dropdown: true
    },
    {
      name: 'Dashboard',
      icon: 'home',
      dropdown: false
    }
  ],
  secondaryRoutes: [
    {
      category: 'customers',
      routes: [
        {
          name: 'Users',
          icon: 'users',
          dropdown: false
        },
        {
          name: 'Guarantors',
          icon: 'users2',
          dropdown: false
        },
        {
          name: 'Loans',
          icon: 'money-bag',
          dropdown: false
        },
        {
          name: 'Decision Models',
          icon: 'hand-shake',
          dropdown: false
        },
        {
          name: 'Savings',
          icon: 'piggy-bank',
          dropdown: false
        },
        {
          name: 'Loan Requests',
          icon: 'holding-bag',
          dropdown: false
        },
        {
          name: 'Whitelist',
          icon: 'user-check',
          dropdown: false
        },
        {
          name: 'Karma',
          icon: 'user-times',
          dropdown: false
        }
      ]
    },
    {
      category: 'businesses',
      routes: [
        {
          name: 'Organization',
          icon: 'briefcase',
          dropdown: false
        },
        {
          name: 'Loan Products',
          icon: 'holding-bag',
          dropdown: false
        },
        {
          name: 'Savings Proucts',
          icon: 'bank',
          dropdown: false
        },
        {
          name: 'Fees and Charges',
          icon: 'coins',
          dropdown: false
        },
        {
          name: 'Transactions',
          icon: 'txn',
          dropdown: false
        },
        {
          name: 'Services',
          icon: 'fan',
          dropdown: false
        },
        {
          name: 'Service Account',
          icon: 'user-cog',
          dropdown: false
        },
        {
          name: 'Settlements',
          icon: 'scroll',
          dropdown: false
        },
        {
          name: 'Reports',
          icon: 'bar-chart',
          dropdown: false
        }
      ]
    },
    {
      category: 'settings',
      routes: [
        {
          name: 'Preferences',
          icon: 'slider',
          dropdown: false
        },
        {
          name: 'Fees and Pricing',
          icon: 'percent-badge',
          dropdown: false
        },
        {
          name: 'Audit Logs',
          icon: 'clipboard',
          dropdown: false
        },
        {
          name: 'Systems Messages',
          icon: 'tire',
          dropdown: false
        }
      ]
    }
  ]
};
