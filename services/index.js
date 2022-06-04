import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                biography
                name
                id
                picture {
                  url
                }
              }
              slug
              createdAt
              title
              excerpt
              coverImage {
                url
              }
              tags
              id
            }
          }
        }
      }
      `

      const result = await request(graphqlAPI, query)
      return result.postsConnection.edges;
    
}