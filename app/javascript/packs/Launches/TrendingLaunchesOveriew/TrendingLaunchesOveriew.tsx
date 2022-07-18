import * as React from "react";
import { useQuery } from "react-apollo";
import { SectionHeadline } from "../../../components/SectionHeadline/SectionHeadline";
import { allPostsQuery } from "../../../graphql/queries/posts/allPostsQuery";
import { Post } from "../../../models/Post";
import { TrendingLaunchOverviewItem } from "./TrendingLaunchOverviewItem/TrendingLaunchOverviewItem";
import "./index.scss";

export const TrendingLaunchesOveriew = () => {
  const { data, loading, error } = useQuery<{ postsAll: Post[] }>(
    allPostsQuery
  );

  const launchesToShow = React.useMemo(() => {
    return (
      data?.postsAll
        .sort((a, b) => a.weeklyFeedPosition - b.weeklyFeedPosition)
        .slice(0, 3) || []
    );
  }, [data]);

  return (
    <div id="trending-launches">
      <SectionHeadline label="Trending launches" />
      <div className="trending-launches-list">
        {launchesToShow.map((post) => (
          <TrendingLaunchOverviewItem isLoading={loading} launch={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
