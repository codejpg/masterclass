import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Working with Waste</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
        Projects
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/artists/" activeClassName="active">
        Workshop
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/" activeClassName="active">
          Info
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/upcoming/" activeClassName="active">
          Upcoming
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
