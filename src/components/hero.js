import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Link } from 'gatsby'

import * as styles from './hero.module.css'

const Hero = ({ image, title, subtitle, content, link }) => (
  <div className={styles.hero}>
    
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      <Link to={`/participants/${link}`}><h1 className={styles.subtitle}>{subtitle}</h1></Link>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero
