import { FC } from 'react';
import { FilterFieldProps, InputProps } from '../../types/models';

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

export const FilterField: FC<FilterFieldProps> = ({ variation, type, placeholder, name, id, onChange, options, label }) => {
  return (
    <div className="filter-field-container">
      <label htmlFor={name}>{label}</label>
      {variation === 'select' ? (
        <span className="select-caret">
        <select
          placeholder={placeholder}
          name={name}
          id={id}
          className="filter-field"
        >
          <option>{placeholder}</option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        </span>
      ) : (
        <div className="filter-input-container">
          <input
            className="filter-field"
            placeholder={placeholder}
            name={name}
            id={id}
            type={type}
            onChange={onChange}
          />
          {name === 'date' && (
            <img
              src="/img/dashboard/icons/calendar.svg"
              alt="calendar icon"
            />
          )}
        </div>
      )}
    </div>
  );
};
