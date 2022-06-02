import * as React from "react";
import Skeleton from "react-loading-skeleton";
import { ContributorUserAvatar } from "../../../components/ContributorUserAvatar/ContributorUserAvatar";
import { User } from "../../../models/User";

import "./index.scss";

interface IProps {
  commenters: User[];
  makers: User[];
  voters: User[];
  hunter: User;
  isLoading: boolean;
}

export const PostContributors: React.FC<IProps> = ({
  commenters,
  hunter,
  voters,
  makers,
  isLoading,
}) => {
  return (
    <div className="post-contributors">
      {isLoading ? (
        Array(20)
          .fill("")
          .map((_, index) => <Skeleton key={index} circle width="30px" height="30px" />)
      ) : (
        <>
          {hunter && (
            <ContributorUserAvatar
              user={hunter}
              key={hunter.id}
              contributionType="POSTER"
            />
          )}
          {makers.map((user) => (
            <ContributorUserAvatar
              user={user}
              key={user.id}
              contributionType="MAKER"
            />
          ))}
          {commenters.map((user) => (
            <ContributorUserAvatar
              user={user}
              key={user.id}
              contributionType="COMMENTER"
            />
          ))}
          {voters.map((user) => (
            <ContributorUserAvatar
              user={user}
              key={user.id}
              contributionType="VOTER"
            />
          ))}
        </>
      )}
    </div>
  );
};
