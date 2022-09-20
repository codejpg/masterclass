import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ArtistPreview from '../components/artist-preview'

class RootIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const [author] = get(this, 'props.data.allContentfulIntroduction.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImage}
          title={author.title}
          content={author.description}
        />
        {/*<ArticlePreview posts={posts} />*/}
        <ArtistPreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
      
    }
    allContentfulPortfolioPost {
      nodes {
        description
        text {
          raw
        }
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        slug
        title
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }

      allContentfulIntroduction (
        filter: { contentful_id: { eq: "4HNowKy0j4VYNuQ6MLUk7G" } }
      ){
        nodes {
          title
          description {
            raw
          }
          heroImage {
            gatsbyImage(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 1180
            )
          }
        }
      }
    
    
  }
`
