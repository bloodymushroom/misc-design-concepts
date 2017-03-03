import React, { Component } from 'react'
// css
import classNames from './concept1.css'

export default class LeftBarContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={classNames.leftBarContent}>
        <h1>Portfolio</h1>
        <h3>By Emmeline Lan</h3>
      </div>
    )
  }
}