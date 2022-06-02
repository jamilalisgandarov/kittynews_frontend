import gql from "graphql-tag";

export const voteAddMutation = gql`
  mutation VoteAdd($postId: ID!) {
    voteAdd(postId: $postId){
        post {
            id
        }
    }
  }
`;