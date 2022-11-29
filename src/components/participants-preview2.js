import React from 'react'
import { Link } from 'gatsby'

import * as styles from './participant-preview.css'

const ParticipantsPreview2 = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
 


        {posts.map((post) => {
          return (

            <li key={post.slug}>
              <div className={styles.container}>
              <Link to={`/participants/${post.slug}`} className={styles.link} >
              <h1 className={styles.content}>{post.name}</h1>
          {/*
              <GatsbyImage onMouseOver={handleHover(1)} className={styles.image} alt="" image={post.heroImage.gatsbyImage} />
  
    
          
              <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
                {post.description?.raw && renderRichText(post.description)}
              </div>
          */}
              </Link>
     
              </div>
            </li>
          )
        })}
  
  
}

export default ParticipantsPreview2
 