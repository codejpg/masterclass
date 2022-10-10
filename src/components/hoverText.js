import React from 'react'


class hoverText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }
    
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }
    
    render() {
       var linkStyle;
       if (this.state.hover) {
         linkStyle = {color: '#ed1212',cursor: 'pointer'}
       } else {
         linkStyle = {color: '#000'}
       }
        return(
            <p style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Test</p>
        )
    }
}

export default hoverText