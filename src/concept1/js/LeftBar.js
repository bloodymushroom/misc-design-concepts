import React, { Component } from 'react'
import classNames from './concept1.css'

// components
import HeaderIcon from './HeaderIcon'
import LeftBarContent from './LeftBarContent'
import SocialMediaBar from './SocialMediaBar'

// material ui
import RaisedButton from 'material-ui/RaisedButton';

var fakeState = {
  hidden: false
}

export default class LeftBar extends Component {
  constructor() {
    super();

    this.state = {
      hidden: false
    }

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    let styles = {
      toggleButton: {
        position: 'absolute',
        height: '50px',
        width: '50px',
        borderRadius: '100%',
        backgroundColor: 'grey',
        right: '-20px',
        top: '50%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '5px 5px 5px black',
        zIndex: 3
        // transform: 'translateY(-50%) translateX(-50%)'
      }
    }

    console.log(classNames.leftBar)
    return (
      <div style={this.state.hidden ? { flex: 0.2, minWidth: '0px', left: '-100px' } : { flex: 1 }} className={ classNames.leftBar }>
        <HeaderIcon />
        <LeftBarContent />
        <SocialMediaBar />
        <div style={styles.toggleButton} onClick={this.toggleView}>
          <RaisedButton 
            backgroundColor='#FFC107'
            label={this.state.hidden? '>': '<'}
            style={{
              height:'60px',
              width: '20px',
              fontSize: '2em'
            }}
          />
        </div>
      </div>
    )
  }
}
