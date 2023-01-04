export interface InputProps extends Partial<HTMLInputElement> {
  onChange: () => void;
}

export interface ButtonProps extends Partial<HTMLButtonElement> {
  onClick: () => void;
  type: 'button' | 'reset' | 'submit' | undefined;
  variation: 'default-small' | 'outlined-small' | 'outlined' | 'default' | undefined;
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
