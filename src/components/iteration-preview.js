import React, { Component } from 'react';
import { graphql } from 'gatsby' 
import { Link } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components';
import ParticipantsPreview from './participants-preview2';

import * as styles from './iteration.css'

const Menu = styled.a`
  span {
    display: ${props => (props.active ? 'block' : 'none')};
  }
`;
const Subtitle = styled.span`
  span {
    display: ${props => (props.active ? 'block' : 'none')};
  }
`;
const ParticipantList = styled.span`
  span {
    display: ${props => (props.active ? 'block' : 'none')};
  }
`;

class Iterations extends Component  {
  state = {
    isVisible: false,
    isVisible2: false,
    isVisible3: false
  };
  toggleVisible = () => {
    this.setState(state => ({ 
      isVisible: !state.isVisible,
      isVisible2: !state.isVisible2,
      isVisible2: !state.isVisible3,
    
    }));
  };
  toggleVisible2 = () => {
    this.setState(state => ({ isVisible2: !state.isVisible2 }));
  };
  
render(){
  return (

  <div role="navigation" className="nav-box" aria-label="Main">
    <ul className={styles.list}>
      <div className="listItem" onClick={this.toggleVisible} >
        {this.props.name} 
      </div>
      {this.props.subtitle ? <Subtitle className="subtitle" active={this.state.isVisible}>
        <span>{this.props.subtitle}</span>
      </Subtitle> : null}
      {this.props.link1 ? <Menu className="menu" active={this.state.isVisible} href={this.props.link1}>
        <span>{this.props.link1name}</span>
      </Menu> : null}

      {this.props.link2 ? <Menu className="menu" active={this.state.isVisible} href={this.props.link2} >
        <span>{this.props.link2name}</span>
      </Menu> : null}
 
      {this.props.link3 ? <Menu className="menu" active={this.state.isVisible} href={this.props.link3}>
        <span>{this.props.link3name}</span>
      </Menu> : null}

      {this.props.link4 ? <Menu className="menu" active={this.state.isVisible} onClick={this.toggleVisible2} >
        <span>{this.props.link4name}</span>
      </Menu>: null}

      {this.props.mentors ? <ParticipantList className="menu" active={this.state.isVisible2} >
      <ParticipantsPreview className="menu"  posts={this.props.mentors} /> 
  </ParticipantList>: null}

      {this.props.link5 ? <Menu className="menu" active={this.state.isVisible} onClick={this.toggleVisible2} >
        <span>{this.props.link5name}</span>
      </Menu>: null}

      {/*{this.props.mentors ? <ParticipantList className="menu" active={this.state.isVisible2} > 
      <span active={this.state.isVisible2}> Mentors</span>
      </ParticipantList>: null}


      {this.props.participants ? <ParticipantList className="menu" active={this.state.isVisible2} > 
      <span active={this.state.isVisible2}> Participants</span>
  </ParticipantList>: null}*/}

      {this.props.participants ? <ParticipantList className="menu" active={this.state.isVisible2} >
        <ParticipantsPreview className="menu"  posts={this.props.participants} /> 
      </ParticipantList>: null}
     
     
   
      
    </ul>
      
      
 
      
   
   
  </div>
  );
  }
}

export default Iterations

