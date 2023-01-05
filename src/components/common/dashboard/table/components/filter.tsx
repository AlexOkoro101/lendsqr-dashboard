import React, { FC } from 'react';
import { FilterProps } from '../../../../../types/models';
import { FormButton } from '../../../button';
import { FilterField } from '../../../input';
import Card from '../../card';

const Filter: FC<FilterProps> = ({ className }) => {
  return (
    <Card>
      <form className={`filter-form filter-form-${className}`}>
        <div className="fields">
          <FilterField
            label="Organization"
            variation="select"
            placeholder="Select"
            name="organization"
            id="organization"
            onChange={() => {}}
            options={[]}
          />
          <FilterField
            label="Username"
            variation="input"
            placeholder="User"
            name="user"
            id="user"
            onChange={() => {}}
            type="text"
          />
          <FilterField
            label="Email"
            variation="input"
            placeholder="Email"
            name="email"
            id="email"
            onChange={() => {}}
            type="email"
          />
          <FilterField
            label="Date"
            variation="input"
            placeholder="Date"
            name="date"
            id="date"
            onChange={() => {}}
            type="text"
          />
          <FilterField
            label="Phone Number"
            variation="input"
            placeholder="Phone Number"
            name="phone"
            id="phone"
            onChange={() => {}}
            type="tel"
          />
          <FilterField
            label="Status"
            variation="select"
            placeholder="Select"
            name="status"
            id="status"
            onChange={() => {}}
            options={[]}
          />
        </div>
        <div className="action">
          <FormButton
            value="Reset"
            variation="outlined-small"
          />
          <FormButton
            value="Filter"
            variation="default-small"
          />
        </div>
      </form>
    </Card>
  );
};

export default Filter;
