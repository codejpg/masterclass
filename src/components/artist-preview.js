import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
//import {useState, useRef} from 'react';


import Container from './container'
//import Tags from './tags'
import * as styles from './artist-preview.module.css'


const ArtistPreview = ({ posts }) => {

  

  if (!posts) return null
  if (!Array.isArray(posts)) return null
 

  return (
    
    <Container>
      <ul className={styles.articleList}>
      <h1 className="pageTitle">Research Projects</h1>
        {posts.map((post) => {
          return (

            <li key={post.slug}>
              
              <div className={styles.container}>
              <Link to={`/artists/${post.slug}`} className={styles.link}>
     
        
              <GatsbyImage className={styles.image} alt="" image={post.heroImage.gatsbyImage} />
  
    
              
              <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
                {post.description?.raw && renderRichText(post.description)}
              </div>
          
              </Link>
              <div className={styles.meta}>
              </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArtistPreview
