import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOptionsProps } from '../../../../../types/models';
import Card from '../../card';

const UserOptions: FC<UserOptionsProps> = ({ className, userId }) => {
  // navigation hook
  const navigate = useNavigate();

  return (
    <Card>
      <ul className={`user-options user-options-${className} `}>
        <li onClick={() => navigate(`/user/${userId}`)}>
          <img src="/img/dashboard/icons/view.svg" />
          <span>View Details</span>
        </li>
        <li>
          <img src="/img/dashboard/icons/activate-user.svg" />
          <span>Activate User</span>
        </li>
        <li>
          <img src="/img/dashboard/icons/delete-user.svg" />
          <span>balcklist User</span>
        </li>
      </ul>
    </Card>
  );
};

export default UserOptions;
