import gql from "graphql-tag";

export const postDetailsQueryWithViewer = gql`
 query PostPage($postId: ID!) {
    viewer {
      id
      name
      username
      avatar: image(width: 54, height:54)
    }
    post: postView(postId: $postId){
      id
      title
      description
      tagline
      canBeVoted
      votesCount
      viewCount
      isVoted
      commentsCount
      dailyFeedPosition
      weeklyFeedPosition
      logo: image(width: 54, height:54)
      user {
        ...user
      }
      makers {
        ...user
      }
      commenters {
        ...user
      }
      comments {
        id
        createdAt
        text
        user {
          ...user
        }
      }
    }
  }


  fragment user on User {
    id
    name
    username
    image(width: 50, height:50)
  }
`;