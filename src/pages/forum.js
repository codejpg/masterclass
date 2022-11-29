import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArtistPreview from '../components/artist-preview'

class Forum extends React.Component {
  render() {
    const post = get(this, 'props.data.allContentfulForumPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="WWW Forum" />
        <Hero title={post.title} />
      </Layout>
    )
  }
}

export default Forum

export const pageQuery = graphql`
  query ForumQuery {
    allContentfulForumPost{
      nodes {
        title
        body {
          raw
        }
      }
    }
  }
`
