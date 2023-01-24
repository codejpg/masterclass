import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'

import Footer from './footer'
import Cursor from './cursor'

const isBrowser = typeof window !== "undefined";
function getxPosition(e) {
  if (isBrowser) {
    return e.clientX / window.innerWidth;
  }
}

function getyPosition(e) {
  if (isBrowser) {
    return e.clientY / window.innerHeight;
  }
}
class Template extends React.Component {



  render() {
    const { children } = this.props

    return (
      <>
     
        <Seo />
        <Navigation textColor={false} />

        <div className="site">
        <main className="site-content">{children}</main>
        {/*
          <Cursor></Cursor>
        <div id="cursor"></div> */}
     
        </div>
      </>
    )
  }
}

export default Template
