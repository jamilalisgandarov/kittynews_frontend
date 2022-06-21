import * as React from 'react'
import { Button } from '../../../../components/Button/Button';
import { Text } from '../../../../components/Text/Text';
import { UserAvatar } from '../../../../components/UserAvatar/UserAvatar';
import { useViewer } from '../../../../hooks/useViewer'
import { CommentCreatePayload } from '../../../../models/Comment';
import './index.scss';

const MAX_COMMENT_CHARACTER_LIMIT = 250;

interface IProps {
  onCommentAdded: (text: string)=>Promise<CommentCreatePayload>;
}

export const CommentForm:React.FC<IProps> = ({onCommentAdded}) => {
  const {currentUser,isLoggedIn} = useViewer();
  const [comment,setComment] = React.useState('');
  const [errors,setErrors] = React.useState([]);

  const handleCommentChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.target.value;

    if(value.length < MAX_COMMENT_CHARACTER_LIMIT){
      setComment(value);
    }
  },[]);

  const handleSubmit = React.useCallback(async ()=>{
    if(!isLoggedIn){
      window.location.href = '/users/sign_in';
    }else{
      const res = await onCommentAdded(comment);

      if(res.errors?.length>0){
        setErrors(errors);
      }else{
        setComment('');
      }
    }
  },[isLoggedIn,comment,onCommentAdded]);


  return (
    <div id='comment-form'>
      <div className="comment-form-wrapper">
        {isLoggedIn && (
          <UserAvatar user={currentUser}  />
        )}
        <input value={comment} onChange={handleCommentChange} type="text" placeholder='What do you think?' />
        <Button onClick={handleSubmit} variant="outlined" color="secondary" classNames='button-comment'> 
          Comment
        </Button>
      </div>
      {errors.length>0 && (
        <div className="comment-form-errors">
          {errors.map((error,index) => <Text variant="body2" className='error-text' key={index}>{error}</Text>)}
        </div>
      )}
    </div>
  )
}
