import { FC } from 'react';
import { ButtonProps } from '../../types/models';

export const FormButton: FC<ButtonProps> = ({ value, onClick, type, variation }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`form-button-${variation}`}
    >
      {value}
    </button>
  );
};

export const StatusButton: FC<ButtonProps> = ({ value, status }) => {
  return (
    <button
      className={`status-button status-button-${status}`}
      type="button"
    >
      {value}
    </button>
  );
};

export const UserButton: FC<ButtonProps> = ({ value, color }) => {
  return (
    <button
      className={`user-details-button user-details-button-${color}`}
      type="button"
    >
      {value}
    </button>
  );
};
