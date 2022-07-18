import { User } from './User';

export interface Comment {
    createdAt?: string;
    id?: string;
    text?: string;
    user?: User;
}

export interface CommentCreatePayload {
    comment: Comment;
    errors: string[];
}