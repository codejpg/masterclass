import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'


import Container from '../components/container'
import Footer from '../components/footer'

class AboutPage extends React.Component {
    render() {
      const [about]  = get(this, 'props.data.allContentfulAbout.nodes')
      return (
        <>
            <Layout location={this.props.location}>
              <Seo title={about.title} />
              <About title={about.title}
              subtitle={about.subtitle}
              content={about.description}  
              /*image={about.heroImage.gatsbyImage}*/
              />
              
            </Layout>
            <Footer></Footer>
            </>
            )
        
    }
  }

export default AboutPage
    
export const pageQuery = graphql`
query AboutQuery {
  allContentfulAbout {
    nodes {
      title
      subtitle
      description {
        raw
      }
    
     
    }
  }

  }
`