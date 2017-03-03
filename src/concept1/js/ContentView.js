import React, { Component } from 'react';
import classNames from './concept1.css'

// Components
import HeaderIcon from './HeaderIcon'

export default class ContentView extends Component {
  render() {
    return (
      <div className={classNames.contentView}>
        Content
      </div>
    )
  }
}