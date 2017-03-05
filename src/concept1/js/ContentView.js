import React, { Component } from 'react';
import classNames from './styles/concept1.css'
// Components
import HeaderIcon from './HeaderIcon'
import SlidingImage from './SlidingImage'

export default class ContentView extends Component {
  render() {
    return (
      <div className={classNames.contentView}>
        <div className={classNames.slidingContainer}>
          <h1 style={{color: 'rgba(250,250,250 ,0.7)'}}>ux designer. <br />software engineer.</h1>
          <SlidingImage />
        </div>
      </div>
    )
  }
}