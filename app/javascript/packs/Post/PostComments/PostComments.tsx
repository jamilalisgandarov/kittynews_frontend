import * as React from "react";
import { Comment, CommentCreatePayload } from "../../../models/Comment";
import { CommentForm } from "./CommentForm/CommentForm";
import "./index.scss";
import { PostComment } from "./PostComment/PostComment";

interface IProps {
  comments: Comment[];
  isLoading: boolean;
  onCommentAdded: (text: string)=>Promise<CommentCreatePayload>;
}

export const PostComments: React.FC<IProps> = ({ comments,onCommentAdded, isLoading }) => {
  return (
    <div>
      <CommentForm onCommentAdded={onCommentAdded} />
      <div className="post-comment-list">
        {isLoading
          ? Array(3)
              .fill("")
              .map((_, index) => <PostComment key={index} isLoading />)
          : comments.map((comment) => (
              <PostComment key={comment.id} comment={comment} />
            ))}
      </div>
    </div>
  );
};
