import React from 'react'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'
import * as styles from './index.module.css'

class Template extends React.Component {



  render() {
    const { children } = this.props

    return (
      <>
     
        <Seo />
        <Navigation textColor={true} />
        <div className={styles.indexsite}>
        <main className={styles.indexsitecontent}>{children}</main>
        {/*
          <Cursor></Cursor>
        <div id="cursor"></div> */}
     
        </div>
      </>
    )
  }
}

export default Template
