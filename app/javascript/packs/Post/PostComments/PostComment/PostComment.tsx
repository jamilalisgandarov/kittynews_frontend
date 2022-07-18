import * as React from 'react'
import Skeleton from 'react-loading-skeleton';
import { Text } from '../../../../components/Text/Text';
import { UserAvatar } from '../../../../components/UserAvatar/UserAvatar';
import { Comment } from '../../../../models/Comment'
import './index.scss';

interface CommentProps {
    comment?: Comment;
    isLoading?: boolean;
}

export const PostComment:React.FC<CommentProps> = ({
  comment,
  isLoading 
}) => {
  return (
    <div className='post-comment'>
      <div className="post-comment-header">
        <UserAvatar user={comment?.user} isLoading={isLoading} />
        <Text variant='body2' fontWeight="bold">
          {isLoading ? <Skeleton width="90px" /> : comment?.user.name}
        </Text>
        <Text variant='body2' className='text-color-blueish'>
          {isLoading ? <Skeleton width="60px" /> : `@${comment?.user.username}`}
        </Text>
      </div>
      <div className="post-comment-content">
        <Text variant='body2' className='text-color-blueish'>
          {isLoading? <Skeleton width="100%" count={5} /> : `${comment?.text}`}
        </Text>
      </div>
    </div>
  )
}
