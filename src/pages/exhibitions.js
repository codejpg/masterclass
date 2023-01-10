import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'

import Container from '../components/container'

class ExhibitionsPage extends React.Component {
    render() {
      const [exhibitions]  = get(this, 'props.data.allContentfulExhibitions.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={exhibitions.title} />
              <About title={exhibitions.title}
              content={exhibitions.body}  

              />
         
            </Layout>
            )
        
    }
  }

export default ExhibitionsPage
    
export const pageQuery = graphql`
query ExhibitionsQuery {
  allContentfulExhibitions {
    nodes {
      title
      body{
        raw
      }
    
     
    }
  }

}
`