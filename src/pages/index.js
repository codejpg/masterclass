import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Iteration from '../components/iteration-preview'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ArtistPreview from '../components/artist-preview'



class RootIndex extends React.Component {
 
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const [author] = get(this, 'props.data.allContentfulIntroduction.nodes')

    return (
      <Layout location={this.props.location}>
        <Iteration id="1" 
        name="Iteration 1" 
        subtitle="Working with Waste Research Group: Workshop" 
        link1="/artists" 
        link1name="Overview" 
        link2="/participants" 
        link2name="Participants + Projects" 
        link3="/participants" 
        link3name="Forum" 
        link4="/artists" 
        link4name="Shared Resource"/>
        <Iteration id="2" 
        name="Iteration 2" 
        subtitle="Working With Waste: Exhibition and programme (2023)"/>
        <Iteration id="3" 
        name="Iteration 3" 
        link1="/artists" 
        link1name="Working with Waste: Virtual Roundtable (2022-23)" 
        link2="/artists" 
        link2name="Download pdf" />
        <Iteration id="4" 
        name="Iteration 4" 
        subtitle="Working With Waste: Publication (2023)" />
       
    
       {/* <ArtistPreview  posts={posts} />*/}

      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
      
    }
    allContentfulPortfolioPost {
      nodes {
        
       
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        slug
        title
      }
    }
 

      allContentfulIntroduction (
        filter: { contentful_id: { eq: "4HNowKy0j4VYNuQ6MLUk7G" } }
      ){
        nodes {
          title
          description {
            raw
          }
          heroImage {
            gatsbyImage(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 1180
            )
          }
        }
      }
    
    
  }
`
