import React, { Component } from 'react'
import classNames from './concept1.css'

// components
import HeaderIcon from './HeaderIcon'
import LeftBarContent from './LeftBarContent'

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
        left: '90%',
        top: '50%',
        border: '5px solid black',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        // transform: 'translateY(-50%) translateX(-50%)'
      }
    }

    console.log(classNames.leftBar)
    return (
      <div className={ classNames.leftBar }>
        <div style={styles.toggleButton}>
          <RaisedButton 
            style={{

              border: '4px solid black',
              backgroundColor: 'white',
              padding: '20px',
              transform: 'translateX(-25px)',
              flex: 1
            }}
            label='>'
          />
        </div>
        <HeaderIcon />
        <LeftBarContent />
      </div>
    )
  }
}
