import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


import Seo from '../components/seo'
import Layout from '../components/layout'
import About from '../components/about/about'

import Footer from '../components/footer/footer'


class AboutPage extends React.Component {
    render() {
      const [about]  = get(this, 'props.data.allContentfulAbout.nodes')
      return (
        <>
            <Layout location={this.props.location}>

          < Seo title="Info" />
        
        
              <About
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
      description {
        raw
      }
    
     
    }
  }

  }
`