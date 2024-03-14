import React, { Component } from 'react'
import styled from 'styled-components'
import ParticipantsPreview from '../../participants-preview/participants-preview'
import ParticipantsPreview2 from '../../participants-preview/participants-preview2'

import * as styles from './iteration.css'

const Menu = styled.a`
  span {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`

const ParticipantList = styled.span`
  span {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`

class Iterations extends Component {
  state = {
    isVisible: false,
    isVisible2: false,
    isVisible3: false,
  }
  toggleVisible = () => {
    if (this.state.isVisible2) {
      this.setState((state) => ({
        isVisible2: !state.isVisible2,
      }))
    }
    if (this.state.isVisible3) {
      this.setState((state) => ({
        isVisible3: !state.isVisible3,
      }))
    }
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }))
  }
  toggleVisible2 = () => {
    this.setState((state) => ({ isVisible2: !state.isVisible2 }))
  }
  toggleVisible3 = () => {
    this.setState((state) => ({ isVisible3: !state.isVisible3 }))
  }

  render() {
    return (
      <div role="navigation" className="nav-box" aria-label="Main">
        <ul className={styles.list}>
          {this.props.link ? (
            <div className="listItem">
              <a href={this.props.link}>{this.props.name} </a>
            </div>
          ) : (
            <div className="listItem" onClick={this.toggleVisible}>
              {this.props.name}
            </div>
          )}

          {this.props.link4name ? (
            <Menu
              className="menu"
              active={this.state.isVisible}
              onClick={this.toggleVisible3}
            >
              <span>{this.props.link4name}</span>
            </Menu>
          ) : null}

          {this.props.mentors ? (
            <ParticipantList className="menu" active={this.state.isVisible3}>
              <ParticipantsPreview2 posts={this.props.mentors} />
            </ParticipantList>
          ) : null}

          {this.props.link5name ? (
            <Menu
              className="menu"
              active={this.state.isVisible}
              onClick={this.toggleVisible2}
            >
              <span>{this.props.link5name}</span>
            </Menu>
          ) : null}

          <ParticipantList className="menu" active={this.state.isVisible2}>
            <ParticipantsPreview posts={this.props.participants} />
          </ParticipantList>
        </ul>
      </div>
    )
  }
}

export default Iterations
