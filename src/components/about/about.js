import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from '../container'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './about.module.css'

const About = ({ image, title, subtitle, content }) => (
  <Container>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <ul className={styles.about}>
      <li>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div>
            {content && (
              <div className={styles.content}>{renderRichText(content)}</div>
            )}
          </div>
        </div>
      </li>
    </ul>
  </Container>
)

export default About
