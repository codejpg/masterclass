import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'


class ParticipantIndex extends React.Component {
  render() {
    const mentor = get(this, 'props.data.allContentfulMentors.nodes')
    return (
      <Layout location={this.props.location}>
        <Seo title="Mentors" />
        <Hero title="Mentors" />
        {/*<ArtistPreview posts={posts} />
        <ParticipantPreview  posts={person} />*/}
      </Layout>
    )
  }
}

export default ParticipantIndex

export const pageQuery = graphql`
  query ArtistIndexQuery {
   
    allContentfulMentors {
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
