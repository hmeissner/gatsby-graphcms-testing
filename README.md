See [@GraphCMS/gatsby-source-graphcms](https://github.com/GraphCMS/gatsby-source-graphcms)

# Gatsby's GraphCMS plugin testing

1. `git clone git@github.com:hmeissner/gatsby-graphcms-testing.git gatsby-graphcms-testing`
2. `cd gatsby-graphcms-testing/plugins/gatsby-source-graphcms && yarn && yarn build`
3. `cd ../.. && yarn && yarn develop`

Swap `yarn build` for `yarn watch` in plugin's directory for
auto-rebuilding the plugin after you make changes to it.

### Every time you rebuild the plugin, gatsby's development server has to be restarted for the changes to reflect.

For an kitchen sink Graph<em>i</em>QL query you can run on Gatsby’s
graphql debugger at <http://localhost:8000/___graphql>, try this
link to preload with `gatsby develop` running:

[Preload kitchen sink Graph<em>i</em>QL query](http://localhost:8000/___graphql?query=%7B%0A%20%20artists%3A%20allArtists%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20picture%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20records%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20records%3A%20allRecords%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20tracks%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20aliasedLength%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20cover%20%7B%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20reviews%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20reviews%3A%20allReviews%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20record%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20review%0A%20%20%20%20%20%20%20%20rating%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

It puts this in the console:

```
{
  artists: allArtists {
    edges {
      node {
        id
        name
        slug
        picture {
          id
          handle
          width
          height
        }
        records {
          id
          slug
          title
        }
      }
    }
  }
  records: allRecords {
    edges {
      node {
        id
        slug
        title
        artist {
          id
          slug
          name
        }
        tracks {
          id
          title
          aliasedLength
        }
        cover {
          handle
        }
        reviews {
          id
          slug
          title
        }
      }
    }
  }
  reviews: allReviews {
    edges {
      node {
        id
        slug
        createdAt
        record {
          slug
          title
          artist {
            slug
            name
          }
        }
        title
        review
        rating
        comments {
          body
        }
      }
    }
  }
}
```

See https://github.com/GraphCMS/gatsby-source-graphcms for more.
