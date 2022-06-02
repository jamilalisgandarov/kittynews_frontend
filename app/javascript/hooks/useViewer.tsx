import gql from 'graphql-tag';
import * as React from 'react';
import { useQuery } from 'react-apollo';

const QUERY = gql`
 query GetViewer {
    viewer {
      id
      name
      username
      image(width: 50, height:50)
    }
  }
`;

export function useViewer (){
    const { data,loading } = useQuery(QUERY);

    return {loading, currentUser: data?.viewer, isLoggedIn: !!data?.viewer } as const;
}