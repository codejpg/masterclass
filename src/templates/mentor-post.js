import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import * as styles from './portfolio-post.module.css'

class MentorPostTemplate extends React.Component {
  render() {
    const person = get(this.props, 'data.contentfulMentors')

    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImage, description } = node.data.target
          return <GatsbyImage image={getImage(gatsbyImage)} alt={description} />
        },
      },
    }

    return (
      <Layout location={this.props.location}>
        <div className={styles.container}>
          <div className={styles.article}>
            <div className={styles.artistBox}>
              <span className={styles.meta}>
                <Link to={`/mentors/${person?.slug}`}>
                  <h1>{person?.name}</h1>{' '}
                </Link>
                {person?.title} &middot;{' '}
                <a href={person?.website} target="_blank" rel="noreferrer">
                  {person?.website}
                </a>
              </span>

              <div className={styles.bio}>
                {person.shortBio?.raw &&
                  renderRichText(person.shortBio, options)}
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
                      <Link to={`/mentors/${previous.slug}`} rel="prev">
                        ← {previous.name}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/mentors/${next.slug}`} rel="next">
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

export default MentorPostTemplate

export const pageQuery = graphql`
  query MentorsBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulMentors(slug: { eq: $slug }) {
      name
      shortBio {
        raw
      }
      title
      website
      slug
    }
    previous: contentfulMentors(slug: { eq: $previousPostSlug }) {
      slug
      title
      name
    }
    next: contentfulMentors(slug: { eq: $nextPostSlug }) {
      slug
      title
      name
    }
  }
`
