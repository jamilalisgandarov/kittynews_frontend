import * as React from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "../../../components/Button/Button";
import { Text } from "../../../components/Text/Text";
import classnames from "classnames";
import "./index.scss";

interface IProps {
  title?: string;
  description?: string;
  logoUrl?: string;
  tagline?: string;
  voteCount: number;
  canBeVoted?: boolean;
  isVoted?: boolean;
  onVote: () => void;
  isLoading: boolean;
}

export const PostHeader: React.FC<IProps> = ({
  title,
  description,
  logoUrl,
  tagline,
  voteCount,
  isVoted,
  onVote,
  isLoading = true,
}) => {
  return (
    <div id="post-header">
      <div className="logo">
        {isLoading ? (
          <Skeleton height="54px" width="54px" />
        ) : (
          <img src={logoUrl} />
        )}
      </div>
      <Text variant="h6" className="title">
        {isLoading ? <Skeleton height="18px" width="200px" /> : title}
      </Text>
      <div className="overview">
        <Text
          variant="h6"
          fontWeight="normal"
          className={classnames("tagLine", "text-color-blueish")}
        >
          {tagline ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
        </Text>
        <div className="actions">
          <Button color="secondary" variant="outlined" disabled={isLoading}>
            Visit
          </Button>
          <Button
            onClick={onVote}
            disabled={isLoading}
            prefix="▲"
            postfix={voteCount?.toString()}
            classNames="upvote"
          >
            {isVoted ? "UPVOTED" : "UPVOTE"}
          </Button>
        </div>
      </div>
      <div className="description">
        <Text variant="body2">{description}</Text>
      </div>
    </div>
  );
};
