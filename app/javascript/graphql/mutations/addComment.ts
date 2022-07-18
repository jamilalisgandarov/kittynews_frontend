import gql from 'graphql-tag';

export const addCommentMutation = gql`
    mutation AddComment($postId: ID!, $text: String!){
        commentCreate(postId:$postId,text: $text){
            comment {
            id
            createdAt
            text
            }
            errors
        }
    }
`;