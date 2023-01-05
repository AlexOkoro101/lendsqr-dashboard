import React, { FC, useState } from 'react';
import { TableModalType, TableProps } from '../../../../types/models';
import { StatusButton } from '../../button';
import Card from '../card';
import Filter from './components/filter';
import Pagination from './components/pagination';
import UserOptions from './components/userOptions';

const Table: FC<TableProps> = ({ headData, bodyData, isLoading }) => {
  // state
  const [modalOptions, setModalOptions] = useState({
    isOptionsVisible: false,
    isFilterVisible: false
  });
  const [userId, setUserId] = useState('');

  // function
  const toggleModals = (type: TableModalType) => {
    if (type === 'options') {
      setModalOptions({
        ...modalOptions,
        isOptionsVisible: !modalOptions.isOptionsVisible
      });
      return;
    }
    setModalOptions({
      ...modalOptions,
      isFilterVisible: !modalOptions.isFilterVisible
    });
  };
  return (
    <div>
      <Card>
        {isLoading && (
          <div className="table-loader">
            Loading...
          </div>
        )}
        {bodyData ? (
          <table className="table">
            <thead>
              <tr>
                {headData.map((data, index) => (
                  <th key={index}>
                    <span>{data}</span>
                    <img
                      onClick={() => toggleModals('filter')}
                      src="/img/dashboard/icons/filter.svg"
                      className="filter"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyData.slice(0, 9).map((data, index) => (
                <tr key={index}>
                  <td>{data.orgName}</td>
                  <td>{data.userName}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    <StatusButton
                      status={'active'}
                      value={'active'}
                    />
                  </td>
                  <td>
                    <img
                      onClick={() => {
                        toggleModals('options');
                        setUserId(data.id);
                      }}
                      className="more-options"
                      src="/img/dashboard/icons/more.svg"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
        <UserOptions
          className={modalOptions.isOptionsVisible ? 'visible' : 'hidden'}
          userId={userId}
        />
        <Filter
          className={modalOptions.isFilterVisible ? 'visible' : 'hidden'}
        />
      </Card>
      <Pagination />
    </div>
  );
};

export default Table;
