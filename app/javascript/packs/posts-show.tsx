import * as React from "react";
import { useMutation, useQuery } from "react-apollo";
import renderComponent from "./utils/renderComponent";
import { PostHeader } from "./Post/PostHeader/PostHeader";
import { Post } from "../models/Post";
import { PostContributors } from "./Post/PostContributors/PostContributors";
import { PostComments } from "./Post/PostComments/PostComments";
import { PostLaunchOverview } from "./Post/PostLaunchOverview/PostLaunchOverview";
import { postDetailsQueryWithViewer } from "../graphql/queries/posts/postDetailsQuery";
import { TrendingLaunchesOveriew } from "./Launches/TrendingLaunchesOveriew/TrendingLaunchesOveriew";
import { User } from "../models/User";
import { voteAddMutation } from "../graphql/mutations/votePost";
import { voteRemoveMutation } from "../graphql/mutations/unvotePost";
import { NetworkStatus } from "apollo-client";
import { useViewer } from "../hooks/useViewer";

function PostsShow({ postId }) {
  const {isLoggedIn} = useViewer();
  const { data, loading, networkStatus, refetch, error } = useQuery<{
    post: Post;
    viewer: User;
  }>(postDetailsQueryWithViewer, {
    variables: { postId },
    fetchPolicy: "no-cache",
  });
  const [voteAdd] = useMutation(voteAddMutation);
  const [voteRemove] = useMutation(voteRemoveMutation);

  const handleVote = React.useCallback(async () => {
    if (isLoggedIn) {
      if (data.post.isVoted) {
        await voteRemove({ variables: { postId } });
      } else {
        await voteAdd({ variables: { postId } });
      }

      refetch();
    } else {
      window.location.href = "/users/sign_in";
    }
  }, [postId, data, refetch, voteRemove, voteAdd, isLoggedIn]);

  return (
    <div id="post">
      <div className="box">
        <PostHeader
          onVote={handleVote}
          description={data?.post.description}
          logoUrl={data?.post.logo}
          isLoading={loading || networkStatus === NetworkStatus.refetch}
          title={data?.post.title}
          voteCount={data?.post.votesCount}
          isVoted={data?.post.isVoted}
        />
        <PostContributors
          commenters={data?.post.commenters || []}
          makers={data?.post.makers || []}
          voters={[]}
          hunter={data?.post.user}
          isLoading={loading}
        />
        <PostComments
          isLoading={loading}
          comments={data?.post.comments || []}
        />
        <PostLaunchOverview
          commentCount={data?.post.commentsCount}
          voteCount={data?.post.votesCount}
          viewsCount={data?.post.viewCount}
          dailyFeedPosition={data?.post.dailyFeedPosition}
          weeklyFeedPosition={data?.post.weeklyFeedPosition}
          isLoading={loading}
        />
        <TrendingLaunchesOveriew />
      </div>
    </div>
  );
}

renderComponent(PostsShow);
