import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
     
        <Seo />
        <Navigation />
        <div className="site">
        <main className="site-content">{children}</main>
          <Cursor></Cursor>
        <div id="cursor"></div>
        <Footer />
        </div>
      </>
    )
  }
}

export default Template
