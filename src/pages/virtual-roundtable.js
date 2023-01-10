import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Seo from '../components/seo'
import Layout from '../components/layout'

import About from '../components/about'



class VirtualRoundtablePage extends React.Component {
    render() {
      const [virtualRoundtable]  = get(this, 'props.data.allContentfulVirtualRoundtable.nodes')
      return (
            <Layout location={this.props.location}>
              <Seo title={virtualRoundtable.title} />
              <About title={virtualRoundtable.title}
              content={virtualRoundtable.body}  

              />
         
            </Layout>
            )
        
    }
  }

export default VirtualRoundtablePage
    
export const pageQuery = graphql`
query VirtualRoundtableQuery {
  allContentfulVirtualRoundtable {
    nodes {
      title
      body{
        raw
      }
    
     
    }
  }

}
`