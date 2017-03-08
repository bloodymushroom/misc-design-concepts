import React, { Component } from 'react';
import classNames from './styles/concept1.css'
// Components
import HeaderIcon from './HeaderIcon'
import SlidingImage from './SlidingImage'

//// mobx
import { toJS } from 'mobx'
import store from './mobx/Store'
import {observer} from 'mobx-react'

@observer class ContentView extends Component {
  render() {
    var styles = {
      color: 'rgba(250,250,250 ,1)', 
      fontSize: '3em', 
      fontWeight: 'bold', 
    }
    var divider = {
      width: '100%',
      borderBottom: '1px solid white'
    }
    console.log('contentview', store.currentView)
    return (
      <div className={classNames.contentView}>
        <div className={classNames.slidingContainer}>
          <div>
            <span style={styles}>Emmeline<br />Lan</span>
            <div style={divider}></div>
            <h1 style={{color: 'rgba(250,250,250 ,0.7)'}}>ux designer. <br />software engineer.</h1>
          </div>
          <SlidingImage />
        </div>
      </div>
    )
  }
}

export default ContentView