import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Text } from '../../../../components/Text/Text';
import './index.scss';

export interface PostLaunchItemProps {
    label: string;
    value: string | number;
    isLoading?: boolean;
}

export const PostLaunchItem:React.FC<PostLaunchItemProps> = ({
    label = '',
    value = '',
    isLoading
}) => {
  return (
    <div className='post-launch-item'>
      <div className='post-launch-item-wrapper'>
        <Text variant='body2' fontWeight="bold" className="text-color-gray">
          {label}
        </Text>
        <Text variant='body1'>
            {isLoading ? <Skeleton width="30px" /> : value}
        </Text>
      </div>
    </div>
  )
}
