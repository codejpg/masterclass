import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'

import About from '../components/about'



class PublicationsPage extends React.Component {
    render() {
      const [publications]  = get(this, 'props.data.allContentfulPublications.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={publications.title} />
              <About title={publications.title}
              content={publications.body}  

              />
         
            </Layout>
            )
        
    }
  }

export default PublicationsPage
    
export const pageQuery = graphql`
query PublicationssQuery {
  allContentfulPublications {
    nodes {
      title
      body{
        raw
      }
    
     
    }
  }

}
`