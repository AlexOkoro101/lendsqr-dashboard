import React, { FC } from 'react';
import { AnalyticProps } from '../../../types/models';
import Card from './card';

const AnalyticsCard: FC<AnalyticProps> = ({ color, analytic, value, icon }) => {
  return (
    <Card>
      <div className={`${color}-card card-icon-container`}>
        <img src={`/img/dashboard/icons/${icon}.svg`} />
      </div>
      <span className="analytic-key">{analytic}</span>
      <span className="analytic-value">{value}</span>
    </Card>
  );
};

export default AnalyticsCard;
