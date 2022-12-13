import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = (textColor) => (
  <div className={styles.wrapper}>
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      {/*<span className={styles.logo} />*/}
      <span className={textColor ? styles.navigationItemLight : styles.navigationItem}>WWW</span>
    </Link>
    <ul className={styles.navigation}>
   {/*   <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
        Projects
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/artists/" activeClassName="active">
        Workshop
        </Link>
</li>*/}
      <li className={textColor? styles.navigationItemLight : styles.navigationItem}>
        <Link to="/about/" activeClassName="active">
          Info
        </Link>
      </li>
    </ul>
  </nav>
  </div>
)

export default Navigation
