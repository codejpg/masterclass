import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from '../components/about.css'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

import Container from '../components/container'

class About extends React.Component {
    render() {
      const posts = get(this, 'props.data.allContentfulAbout.nodes')
  
      if (!posts) return null
      if (!Array.isArray(posts)) return null
    
      return (
        <Container>
            {posts.map((post) => {
              return (

        <Layout location={this.props.location}>
          <Seo title={post.title} />
          <Hero title={post.title}  
          />

          <div className="content">
            {post.description?.raw && renderRichText(post.description)}
            </div>
        </Layout>
              )
            })}
        </Container>
      )
    }
  }

export default About
    
export const pageQuery = graphql`
query AboutQuery {
  allContentfulAbout {
    nodes {
      title
      description {
        raw
      }
    }
  }

  }
`