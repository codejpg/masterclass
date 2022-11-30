import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'

import Container from '../components/container'

class ForumPage extends React.Component {
    render() {
      const [forum]  = get(this, 'props.data.allContentfulForum.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={forum.title} />
              <About title={forum.title}
              content={forum.body}  
              />
         
            </Layout>
            )
        
    }
  }

export default ForumPage
    
export const pageQuery = graphql`
query ForumQuery {
  allContentfulForum {
    nodes {
      title
      body {
        raw
      }
    
     
    }
  }

}
`