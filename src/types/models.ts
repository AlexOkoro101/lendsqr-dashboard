export interface InputProps extends Partial<HTMLInputElement> {
  onChange: () => void;
}

export interface ButtonProps extends Partial<HTMLButtonElement> {
  onClick: () => void;
  type: 'button' | 'reset' | 'submit' | undefined;
  variation: 'default-small' | 'outlined-small' | 'outlined' | 'default' | undefined;
}
