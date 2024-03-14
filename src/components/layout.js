import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation/navigation'


//const isBrowser = typeof window !== "undefined";

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
