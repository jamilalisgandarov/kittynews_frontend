import { Comment } from './Comment';
import { User } from './User';

export interface Post {
    canBeVoted?: boolean;
    commenters?: User[];
    comments?: Comment[];
    commentsCount?: number;
    createdAt?: string;
    dailyFeedPosition?: number;
    description?: string;
    id?: string;
    logo?: string;
    isVoted?: boolean;
    makers?: User[];
    tagline?: string;
    title?: string;
    url?: string;
    user?: User;
    viewCount?: number;
    votesCount?: number;
    weeklyFeedPosition?: number;
}
