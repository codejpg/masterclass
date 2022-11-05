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
    const post = get(this, 'props.data.contentfulPerson.portfolio_post')
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
          title={person.name}

        />
        <Hero
          title={person.name}
        />
        <div className={styles.container}>
          <div className={styles.article}>
           
            <div className={styles.artistBox}>
              <span className={styles.meta}>
              <h1>{person.name}</h1> 
              {person.title} &middot;{' '}
              <a href={person.website} target="_blank">
              {person.website}</a>
              <div className={styles.body}>
              { renderRichText(person.shortBio)}
            </div>
         
 
              </span>
              Research Project
            <Link to={`/artists/${person.project?.slug}`}>
                <p>{person.project?.title} </p>
                <GatsbyImage
                image={person.heroImage}
             />
            </Link>
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
        heroImage {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
    }
    }
`
