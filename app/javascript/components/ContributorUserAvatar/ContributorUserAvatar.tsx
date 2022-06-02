import * as React from 'react';
import { User } from '../../models/User';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import Commenter from '../Icons/Commenter';
import Voter from '../Icons/Voter';
import Hunter from '../Icons/Hunter';
import Maker from '../Icons/Maker';

import "./index.scss";

type ContributionType = "MAKER" | "COMMENTER" | "VOTER" | "POSTER";
interface ContributorUserAvatarProps {
    user: User;
    contributionType: ContributionType;
}

const contributionTypeToIcon:Record<ContributionType, React.FunctionComponent<React.SVGAttributes<SVGElement>>> = {
    COMMENTER : Commenter,
    VOTER: Voter,
    POSTER: Hunter,
    MAKER: Maker
}

export const ContributorUserAvatar:React.FC<ContributorUserAvatarProps> = (
    {
        user,
        contributionType
    }
) => {
const Icon = contributionTypeToIcon[contributionType];
  return (
    <div className='contributor-avatar'>
        <UserAvatar user={user} />
        <Icon className="icon" />
    </div>
  )
}
