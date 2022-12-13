import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className="left">A Research Project from  <a href="https://www.filmuniversitaet.de">Filmuniversität Babelsberg KONRAD WOLF</a> and{' '}
      <a href="https://gatsbyjs.com">IKF</a> &middot;{' '}</div>
      <div></div>
      <div class="rightss">Imprint</div>
    </div>
  </Container>
  
)

export default Footer
