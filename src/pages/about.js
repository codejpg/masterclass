import * as React from "react"
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import get from 'lodash/get'
import { graphql } from 'gatsby'

class About extends React.Component {
    render() {
      const post = get(this, 'props.data.allContentfulAbout.nodes')
  
      return (

            <Layout location={this.props.location}>
                <Seo title="About Page" />
                <Hero 
                title={post.title}
                content={post.description}
                />
                <div>test div</div>
           
            </Layout>


        )

    }
}

export default About
    
export const pageQuery = graphql`
query AboutPageQuery {
  allContentfulAbout {
    nodes {
      title
      description {
        raw
      }
      icons {
        gatsbyImage
      }
    }
  }

  }
`