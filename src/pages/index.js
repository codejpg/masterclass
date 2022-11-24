import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Iteration from '../components/iteration-preview'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ArtistPreview from '../components/artist-preview'
import IndexLayout from '../components/index-layout'


class RootIndex extends React.Component {
 
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const [author] = get(this, 'props.data.allContentfulIntroduction.nodes')

    return (
      <Layout location={this.props.location}>
      <IndexLayout 
      image={author.heroImage.gatsbyImage} />
        <Iteration id="1" 
        name="Iteration 1 (2022)" 
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
        name="Iteration 2 (2022-23)" 
        subtitle="Working With Waste: Exhibition and programme"/>
        <Iteration id="3" 
        name="Iteration 3 (2023)" 
        subtitle="Working with Waste: Virtual Roundtable" 
        link1="/artists" 
        link1name="Download pdf" />
        <Iteration id="4" 
        name="Iteration 4 2023" 
        subtitle="Working With Waste: Publication" />
       
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
            width: 1200
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
              width: 2880
            )
          }
        }
      }
    
    
  }
`
