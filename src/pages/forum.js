import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArtistPreview from '../components/artist-preview'

class Forum extends React.Component {
  render() {
    const post = get(this, 'props.data.allContentfulForum.nodes')
     const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImage, description } = node.data.target
          return (
            <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
            />
          )
        },

      },
    };

    return (
      <Layout location={this.props.location}>
        <Seo title={post.title} />
        <Hero title={post.title} />
        <div >
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
      </Layout>
    )
  }
}

export default Forum

export const pageQuery = graphql`
  query ForumQuery {
    allContentfulForum{
      nodes {
        title
        body {
          raw
        }
      }
    }
  }
`
