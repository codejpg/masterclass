import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'


class SymposiumPage extends React.Component {
    render() {
      const [symposium]  = get(this, 'props.data.allContentfulSymposium.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={symposium.title} />
              <About title={symposium.title}
              subtitle={symposium.subtitle}
              content={symposium.body}  
              image={symposium.image.gatsbyImage}
              />
         
            </Layout>
            )
        
    }
  }

export default SymposiumPage
    
export const pageQuery = graphql`
query SymposiumQuery {
  allContentfulSymposium {
    nodes {
      title
      subtitle
      body{
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