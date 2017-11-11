import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    const articles = this.props.data.articles.edges

    console.log(`articles: ` , articles)

    return (
      <div>
        <h1>Sample Articles</h1>
        <p>Welcome to your new Gatsby example site using the GraphCMS source plugin.</p>
        <p>This is the list of artists and their IDs:</p>
        {articles.map(({ node }, i) => (
          <div key={node.id}>
            <h2>{node.id}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query getAllArticles {
  articles: allArticles {
    edges {
      node {
        id
      }
    }
  }
}
`
