import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './index.module.css'

const IndexLayout = ({ image, title}) => (
  <div className={styles.hero}>
    
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
  
  </div>
)

export default IndexLayout
