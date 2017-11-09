module.exports = {
  siteMetadata: {
    title: `Gatsby with GraphCMS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/vinylbase`,
        query: `{
          allReviews {
            id
            rating
          }
          allArtists {
            id
            name
            slug
            picture { 
              id
              url
              height
              width
            }
            records {
              id
              title
              reviews {
                comments {
                  body
                }
              }
              tracks {
                id
                title
                updatedAt
                createdAt
                record {
                  id
                  tracks {
                    title
                    length
                  }
                }
              }
            }
          }
        }`,
      },
    },
  ],
}
