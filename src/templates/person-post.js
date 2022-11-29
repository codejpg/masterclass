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
//import Tags from '../components/tags'
import * as styles from './portfolio-post.module.css'

class PersonPostTemplate extends React.Component {
  render() {
    const person = get(this.props, 'data.contentfulPerson')
    const post = get(this, 'props.data.contentfulPerson.project')
    const portfolio = get(this, 'props.data.contentfulPortfolioPost')
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
          title={portfolio.title}
          image={`http:${portfolio.heroImage.resize.src}`}
        />
        <Hero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          //subtitle={post.artist?.name}
          link={portfolio.artist?.slug}
        />
        <div className={styles.container}>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.body?.raw && renderRichText(post.body, options)}
            </div>
      

          <div className={styles.artistBox}>
            <span className={styles.meta}>
              <Link to={`/participants/${person?.slug}`} ><h1>{person?.name}</h1> </Link>
              {person?.title} &middot;{' '}
              <a href={person?.website} target="_blank">
                {person?.website}</a>
            </span>

            <div className={styles.bio}>
              {person.shortBio?.raw && renderRichText(person.shortBio, options)}
            </div>

{/*
            {person.project?.slug && <h3>Research Project</h3>}
            <Link to={`/artists/${person.project?.slug}`}>
              <p>{person.project?.title} </p>
              <GatsbyImage
                image={person.heroImage}
              />
            </Link>
             */}


</div>

            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/participants/${previous.slug}`} rel="prev">
                        ← {previous.name}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/participants/${next.slug}`} rel="next">
                        {next.name} →
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

export default PersonPostTemplate

export const pageQuery = graphql`
query PersonBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulPerson(slug: { eq: $slug }) {
        name
        shortBio {
            raw
        }
        title
        website
        slug
        
        project {
          body {
            raw
          }
            heroImage {
                gatsbyImage(width: 100)
            }
            title
            slug
            }
            
         
         
        
      }
      previous: contentfulPerson(slug: { eq: $previousPostSlug }) {
        slug
        title
        name
      }
      next: contentfulPerson(slug: { eq: $nextPostSlug }) {
        slug
        title
        name
      }
      contentfulPortfolioPost {
        slug
        title
        artist {
          name
        }
        body {
          raw
        }
        heroImage {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
    }
    }
`
