export interface InputProps extends Partial<HTMLInputElement> {
  onChange: () => void;
}

export interface FilterFieldProps extends Partial<InputProps> {
  variation?: 'input' | 'select' | undefined;
  options?: {
    label: string;
    value: string;
  }[];
  label: string;
}

export interface ButtonProps extends Partial<HTMLButtonElement> {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit' | undefined;
  variation?: 'default-small' | 'outlined-small' | 'outlined' | 'default' | 'active' | undefined;
  status?: string;
  color?: 'danger'| 'success';
}

export type routeProps = {
  name: string;
  icon: string;
  dropdown: boolean;
}

export type DashboardRoutesProps = {
  mainRoutes: routeProps[];
  secondaryRoutes: {
    category: string;
    routes: routeProps[];
  }[];
}

export interface SideLinkProps {
  name: string;
  icon: string;
  dropdown: boolean;
  className?: string;
}

export interface HeaderProps {
  title: string;
}

export interface AnalyticProps {
  color: 'primary' | 'info' | 'warning' | 'danger' | undefined;
  analytic: string;
  value: string;
  icon?: string;
}

export interface TableProps {
  headData: string[];
  bodyData: Record<any, string>[] | null;
  isLoading?: boolean;
}

export interface UserOptionsProps {
  className: string;
  userId?: string;
}
export type FilterProps = UserOptionsProps;

export type TableModalType = 'options' | 'filter';

export interface SidebarProps {
  sidebarIsVisible: boolean;
}
