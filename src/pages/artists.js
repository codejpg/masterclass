import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import ArtistPreview from '../components/artist-preview/artist-preview'

class ArtistIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Artist" />
        <Hero title="Projects Overview" />
        <ArtistPreview posts={posts} />
      </Layout>
    )
  }
}

export default ArtistIndex

export const pageQuery = graphql`
  query ArtistIndexQuery {
    allContentfulPortfolioPost {
      nodes {
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        title
        slug
        body {
          raw
        }
      }
    }
  }
`
