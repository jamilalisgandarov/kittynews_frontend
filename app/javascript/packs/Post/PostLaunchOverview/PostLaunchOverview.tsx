import * as React from "react";
import { Text } from "../../../components/Text/Text";
import "./index.scss";
import {
  PostLaunchItem,
  PostLaunchItemProps,
} from "./PostLaunchItem/PostLaunchItem";

interface IProps {
  voteCount?: number;
  commentCount?: number;
  weeklyFeedPosition?: number;
  dailyFeedPosition?: number;
  viewsCount?: number;
  isLoading?: boolean;
}

export const PostLaunchOverview: React.FC<IProps> = ({
  voteCount,
  commentCount,
  weeklyFeedPosition,
  dailyFeedPosition,
  viewsCount,
  isLoading,
}) => {
  const items: PostLaunchItemProps[] = React.useMemo(
    () => [
      {
        label: "Upvotes",
        value: voteCount,
      },
      {
        label: "Comments",
        value: commentCount,
      },
      {
        label: "Views",
        value: viewsCount,
      },
      {
        label: "Daily rank",
        value: `#${dailyFeedPosition}`,
      },
      {
        label: "Weekly rank",
        value: `#${weeklyFeedPosition}`,
      },
    ],
    [voteCount, commentCount, viewsCount, dailyFeedPosition, weeklyFeedPosition]
  );

  return (
    <div id="launch-overview">
      <Text variant="h6">About this launch</Text>
      <div className="launch-overview-list">
        {items.map(({ value, label }) => (
          <PostLaunchItem isLoading={isLoading} key={label} value={value} label={label} />
        ))}
      </div>
    </div>
  );
};
