import React from 'react'
import { Link } from 'gatsby'

import * as styles from './participant-preview.css'

const ParticipantsPreview = ({ posts }) => {
  if (!posts) return null

 

  return (
    
    <>
      <ul className={styles.nameList}>
        {posts.map((post) => {
          return (
         <>
            <li key={post.slug}>
             
              <div className={styles.container}>
              <Link to={`/participants/${post.slug}`} className={styles.link} >
              <span className={styles.content}>{post.name}</span>
          {/*
              <GatsbyImage onMouseOver={handleHover(1)} className={styles.image} alt="" image={post.heroImage.gatsbyImage} />
  
    
          
              <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
                {post.description?.raw && renderRichText(post.description)}
              </div>
          */}
              </Link>
              <div className={styles.meta}>
              </div>
              </div>
            </li>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default ParticipantsPreview
 