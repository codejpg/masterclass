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

class PersonPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolioPost')
    const person = get(this.props, 'data.contentfulPerson')

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
            <div className={styles.body}>
              {person.body?.raw && renderRichText(person.shortBio)}
            </div>
            <div className={styles.artistBox}>
              <span className={styles.meta}>
              <h1>{person.name}</h1> 
              {person.title} &middot;{' '}
              <a href={person.website} target="_blank">
              {person.website}</a>
              </span>
          
          </div>
         
         
          </div>
          
        </div>
      </Layout>
    )
  }
}

export default PersonPostTemplate

export const pageQuery = graphql`
query PersonPostBySlug{
    allContentfulPerson {
        nodes {
          name
          shortBio {
            raw
          }
          title
          website
          contentful_id
        }
      }
    }
`
