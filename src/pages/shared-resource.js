import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Chat from '../components/chat/chat'

import Container from '../components/container'
let title, image, subtitle, body;
class SharedResourcePage extends React.Component {
    render() {
      const [about]  = get(this, 'props.data.allContentfulSharedResource.nodes')
      return (
            <Layout location={this.props.location}>
            

  
            
              <About title={about.title}
              image={about.image.gatsbyImage ? about.image.gatsbyImage : null}
              subtitle={about.subtitle}  
              //content={about.body}  
              />
                   <Chat></Chat>
            </Layout>
            )
        
    }
  }

export default SharedResourcePage
    
export const pageQuery = graphql`
query SharedResourceQuery {
  allContentfulSharedResource {
    nodes {
      title
      subtitle
      body {
        raw
      }
      image {
        gatsbyImage(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 3880
        )
      }
      
     
    }
  }

  }
`