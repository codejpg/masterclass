import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'

import Container from '../components/container'

class OverviewPage extends React.Component {
    render() {
      const [about]  = get(this, 'props.data.allContentfulOverview.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={about.title} />
              <About title={about.title}
              image={about.image.gatsbyImage}
              subtitle={about.subtitle}  
              content={about.body}  
              />
         
            </Layout>
            )
        
    }
  }

export default OverviewPage
    
export const pageQuery = graphql`
query SharedResourceQuery {
  allContentfulOverview {
    nodes {
      title
      subtitle
      body {
        raw
      }
      image{
        gatsbyImage(width: 3000)

      }
     
    }
  }

  }
`