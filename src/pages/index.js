import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Iteration from '../components/iteration-preview'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ArtistPreview from '../components/artist-preview'
import IndexLayout from '../components/index-layout'
import ParticipantsPreview from '../components/participants-preview2';


class RootIndex extends React.Component {
 
  render() {

    const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const mentor = get(this, 'props.data.allContentfulMentor.nodes')
    const person = get(this, 'props.data.allContentfulPerson.nodes')
    const [author] = get(this, 'props.data.allContentfulIntroduction.nodes')

    return (
      <Layout location={this.props.location}>
      <IndexLayout 
      image={author.heroImage.gatsbyImage} />
        <Iteration id="1" 
        name="Working With Waste: Research Group" 

        link1="/overview" 
        link1name="Workshop Overview" 
        link2="/forum" 
        link2name="Forum" 
        link3="/shared-resource" 
        link3name="Shared Resource"
        link4="/participants" 
        link4name="Participants + Projects"   
        mentors={mentor}
        participants={person}
        />
        <Iteration id="2" 
        name=" Working With Waste: Exhibition and programme" />
           

        <Iteration id="3" 
        name="2023" />                  
 
       
       {/* <ArtistPreview  posts={posts} />*/}

      </Layout>
    )       
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulMentor {
      nodes {
      
        shortBio {
          raw
        }
        title
      }
    }
    allContentfulPerson {
      nodes {
        name
        shortBio {
          raw
        }
        title
        website
        contentful_id
        slug
        project {
          heroImage {
            gatsbyImage(width: 100)
         }
          title
          slug
        }
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
              width: 3880
            )
          }
        }
      }
    
    
  }
`
