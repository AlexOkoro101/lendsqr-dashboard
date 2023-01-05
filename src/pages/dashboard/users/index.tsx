import React, { useEffect } from 'react';
import AnalyticsCard from '../../../components/common/dashboard/analyticsCard';
import Header from '../../../components/common/dashboard/header';
import Table from '../../../components/common/dashboard/table';
import { useFetch } from '../../../hooks/useFetch';
import { tableData, usersAnalytics } from '../../../utils';

const Users = () => {
  const { fetchData, fetchObj } = useFetch();

  useEffect(() => {
    fetchData('users');
  }, []);

  return (
    <div className="users">
      <Header
        title="Users"
      />
      <div className="figures">
        {usersAnalytics.map((item, index) => (
          <AnalyticsCard
            key={index}
            color={item.color}
            analytic={item.analytic}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
      <Table
        headData={tableData.headData}
        bodyData={fetchObj.data}
        isLoading={fetchObj.loading}
      />
    </div>
  );
};

export default Users;
