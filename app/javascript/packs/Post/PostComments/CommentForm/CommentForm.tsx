import * as React from 'react'
import { Button } from '../../../../components/Button/Button';
import { UserAvatar } from '../../../../components/UserAvatar/UserAvatar';
import { useViewer } from '../../../../hooks/useViewer'
import './index.scss';

export const CommentForm = () => {
  const {currentUser,isLoggedIn} = useViewer();

  return (
    <div id='comment-form'>
      {isLoggedIn && (
        <UserAvatar user={currentUser}  />
      )}
      <input type="text" placeholder='What do you think?' />
      <Button variant="outlined" color="secondary" classNames='button-comment'> 
        Comment
      </Button>
    </div>
  )
}
