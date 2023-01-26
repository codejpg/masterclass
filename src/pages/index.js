import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import IndexLayout from '../components/index-layout'
import IndexContent from '../components/index-content'
import Iteration from '../components/iteration-preview'


class RootIndex extends React.Component {
 
  render() {

    //const posts = get(this, 'props.data.allContentfulPortfolioPost.nodes')
    const mentor = get(this, 'props.data.allContentfulMentors.nodes')
    const person = get(this, 'props.data.allContentfulPerson.nodes')
    const [author] = get(this, 'props.data.allContentfulIntroduction.nodes')

    return (
   
      <IndexLayout location={this.props.location}>
      <IndexContent 
      image={author.heroImage.gatsbyImage} />
        <Iteration id="1" 
       name=" Research Group Participants" 
        link4name="Mentors + Speakers" 
        link5name="Participants Projects"  
        participants={person}
        mentors={mentor}
        />
        <Iteration id="2" 
        name="Symposium" 
        link="/symposium" />

        <Iteration id="3" 
        name="Workshops" 
        link="/shared-resource" />             

      <Iteration id="4" 
        name="Virtual Roundtable" 
        link="/virtual-roundtable" />

        <Iteration id="5" 
        name="Reading list "
        link="/readinglist"  /> 

        <Iteration id="6" 
        name="Exhibitions" 
        link="/exhibitions" /> 
         
         <Iteration id="7" 
        name="Publications" 
        link="/publications" />   
       
       {/* <ArtistPreview  posts={posts} />*/}

      </IndexLayout>
 
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
    allContentfulMentors{
      nodes {
        name
        shortBio {
          raw
        }
        title
     
        contentful_id
        slug

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
