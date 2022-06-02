import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { User } from '../../models/User';
import './index.scss';

interface UserAvatarProps {
    user?: User;
    isLoading?: boolean;
}

export const UserAvatar:React.FC<UserAvatarProps> = ({
    user,
    isLoading,
}) => {
  return (
    <div className='user-avatar'>
      {isLoading ? <Skeleton width="30px" height="30px" circle /> : <img src={user?.image} alt={user?.username} title={user?.name} />}
    </div>
  )
}
