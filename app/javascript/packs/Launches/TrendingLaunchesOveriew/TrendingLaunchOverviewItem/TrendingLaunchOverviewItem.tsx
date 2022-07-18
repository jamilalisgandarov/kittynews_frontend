import * as React from "react";
import { Post } from "../../../../models/Post";
import { Text } from "../../../../components/Text/Text";
import "./index.scss";
import Skeleton from "react-loading-skeleton";

interface TrendingLaunchOverviewItemProps {
  launch: Post;
  isLoading: boolean;
}

export const TrendingLaunchOverviewItem: React.FC<
  TrendingLaunchOverviewItemProps
> = ({ launch ,isLoading}) => {
	const quickOverview = [
		`▲ ${launch.votesCount}`,
		`${launch.commentsCount} comments`
	];

  return (
      <div className="launch-overview-item">
        <div className="launch-overview-item-img">
          {isLoading ? <Skeleton width="40px" height="40px"  /> : (
          <img className="launch-overview-item-img" src={launch.logo} alt={launch.tagline} />
          )}
        </div>
        <a href={`/posts/${launch.id}`}>
            <Text variant="body1" fontWeight="bold">
              {isLoading ? <Skeleton width='120px' /> : launch.title}
            </Text>
        </a>
        <Text variant="body2" fontWeight="bold" className="text-color-gray">
          {isLoading ? <Skeleton width='80px' />  :launch.tagline}
        </Text>
        <Text variant="caption" className="text-color-gray launch-overview-item-overview">
        {isLoading ? <Skeleton width="110px" /> :quickOverview.join(' · ')}
        </Text>
      </div>
  );
};
