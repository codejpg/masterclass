import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import About from '../components/about'


class UpcomingPage extends React.Component {
    render() {
      const [upcoming]  = get(this, 'props.data.allContentfulAbout.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={upcoming.title} />
              <About title={upcoming.title}
              subtitle={upcoming.subtitle}
              content={upcoming.description}  
              image={upcoming.heroImage.gatsbyImage}
              />
         
            </Layout>
            )
        
    }
  }

export default UpcomingPage
    
export const pageQuery = graphql`
query AboutQuery {
  allContentfulAbout {
    nodes {
      title
      subtitle
      description {
        raw
      }
      heroImage {
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 424
          height: 212
        )
      }
     
    }
  }

  }
`