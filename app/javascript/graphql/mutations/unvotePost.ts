import gql from "graphql-tag";

export const voteRemoveMutation = gql`
  mutation VoteRemove($postId: ID!) {
    voteRemove(postId: $postId){
        post {
            id
        }
    }
  }
`;