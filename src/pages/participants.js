import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArtistPreview from '../components/artist-preview'
import ParticipantPreview from '../components/participants-preview'

class ParticipantIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const person = get(this, 'props.data.allContentfulPerson.nodes')
    return (
      <Layout location={this.props.location}>
        <Seo title="Participants" />
        <Hero title="Participants" />
        {/*<ArtistPreview posts={posts} />*/}
        <ParticipantPreview  posts={person} />
      </Layout>
    )
  }
}

export default ParticipantIndex

export const pageQuery = graphql`
  query ArtistIndexQuery {
    allContentfulPortfolioPost{
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
    allContentfulPerson {
      nodes {
        name
        shortBio {
          raw
        }
        title
        website
        contentful_id
        slug
      }
    }
  }
`
