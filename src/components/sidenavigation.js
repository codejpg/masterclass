import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Iteration from '../components/iteration-preview'
import { Link } from 'gatsby'

import * as styles from './sidenavigation.module.css'

class SideNavigation extends React.Component {
  render() {
    const mentor = get(this, 'props.data.allContentfulMentors.nodes')
    const person = get(this, 'props.data.allContentfulPerson.nodes')

    return(
  
      <nav role="navigation" className={styles.container} aria-label="Main">
      <Iteration id="1" 
       name=" Research Group Participa5nts" 
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
      </nav>
 
    )

  }




}
export default SideNavigation

export const pageQuery = graphql`
  query HomeQuery {

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
}`