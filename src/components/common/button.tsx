import { FC } from 'react';
import { ButtonProps } from '../../types/models';

export const FormButton: FC<ButtonProps> = ({ value, onClick, type, variation }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      variation={variation}
      className={`form-button-${variation}`}
    >
      {value}
    </button>
  );
};
