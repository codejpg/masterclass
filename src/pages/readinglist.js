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
      const [reading]  = get(this, 'props.data.allContentfulReadingList.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={reading.title} />
              <About title={reading.title}
              content={reading.body}  

              />
         
            </Layout>
            )
        
    }
  }

export default ForumPage
    
export const pageQuery = graphql`
query ReadingListQuery {
  allContentfulReadingList {
    nodes {
      title
      body{
        raw
      }
    
     
    }
  }

}
`