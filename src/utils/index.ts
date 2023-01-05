import { AnalyticProps, TableProps } from '../types/models';

export const BASE_URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/';

export const usersAnalytics: AnalyticProps[] = [
  {
    color: 'primary',
    analytic: 'Users',
    value: '2,453',
    icon: 'users-2'
  },
  {
    color: 'info',
    analytic: 'Active users',
    value: '2,453',
    icon: 'users-3'
  },
  {
    color: 'warning',
    analytic: 'Users with loans',
    value: '12,453',
    icon: 'coin-stack'
  },
  {
    color: 'danger',
    analytic: 'Users with savings',
    value: '102,453',
    icon: 'coin-stack-2'
  }
];

export const tableData: TableProps = {
  headData: [
    'Organization',
    'Username',
    'Email',
    'Phone number',
    'Date joined',
    'Status'
  ],
  bodyData: Array(9).fill({
    organization: 'Lendsqr',
    username: 'Alex Okoro',
    email: 'alex@g.com',
    phone: '07257785434',
    date: 'Apr 30, 2022 10:00 AM',
    status: 'active'
  })
};

export const navTabsItems = [
  {
    id: 1,
    name: 'General Details'
  },
  {
    id: 2,
    name: 'Documents'
  },
  {
    id: 3,
    name: 'Bank Details'
  },
  {
    id: 4,
    name: 'Loans'
  },
  {
    id: 5,
    name: 'Savings'
  },
  {
    id: 6,
    name: 'App and System'
  }
];
