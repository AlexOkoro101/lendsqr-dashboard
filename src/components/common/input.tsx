import { FC } from 'react';
import { InputProps } from '../../types/models';

export const FormInput: FC<InputProps> = ({
  placeholder,
  name,
  id,
  type,
  onChange
}) => {
  return (
    <div className="input-container">
      <input
        className="form-input"
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
      {type === 'password' && (
        <span>
          SHOW
        </span>
      )}
    </div>
  );
};

export const SearchInput: FC<InputProps> = ({
  placeholder,
  name,
  id,
  type,
  onChange
}) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        onChange={onChange}
      />
      <button
        className="search-button"
      >
        <img
          src="/img/dashboard/icons/navbar/search.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
};
