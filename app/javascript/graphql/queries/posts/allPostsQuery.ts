import gql from "graphql-tag";

export const allPostsQuery = gql`
  query PostsPage {
    postsAll {
      id
      title
      tagline
      url
      commentsCount
      votesCount
      logo: image(width: 40, height:40)
      weeklyFeedPosition
    }
  }
`;