import { User } from './User';

export interface Comment {
    createdAt?: string;
    id?: string;
    text?: string;
    user?: User;
}