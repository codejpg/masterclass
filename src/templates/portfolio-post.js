import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './portfolio-post.module.css'

class PortfolioPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolioPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')


    
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
   
        <Seo
          title={post.title}
          image={`http:${post.heroImage.resize.src}`}
        />
        <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          //subtitle={post.artist?.name}
          link={post.artist?.slug}
        />
        <div className={styles.container}>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
            <div className={styles.artistBox}>
              <span className={styles.meta}>
              <Link to={`/participants/${post.artist?.slug}`} ><h1>{post.artist?.name}</h1> </Link>
              {post.artist?.title} &middot;{' '}
              <a href={post.artist?.website} target="_blank">
              {post.artist?.website}</a>
              </span>
          
            <div className={styles.bio}>
              {post.artist.shortBio?.raw && renderRichText(post.artist.shortBio, options)}
            </div>
    </div>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/artists/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/artists/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
          
        </div>
      </Layout>
    )
  }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulPortfolioPost(slug: { eq: $slug }) {
      slug
      title
      artist {
        name
      }
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    
      body {
        raw
      }
      artist {
        name
        shortBio {
          raw
        }
        title
        website
        slug
      }
      
    }
    previous: contentfulPortfolioPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulPortfolioPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
