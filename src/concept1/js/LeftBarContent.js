import React, { Component } from 'react'
// css
import classNames from './concept1.css'
import CustomIcon from './CustomIcon'

var iconData = [
  {
    label: 'home',
    url: 'http://freevector.co/wp-content/uploads/2010/12/57883-house-building-outline.png'
  },
  {
    label: 'skills',
    url: 'http://sovalacc.com/wp-content/uploads/2015/09/SOVALACC-WEBSITE-ICON-14-e1447528734353.png'
  },
  {
    label: 'projects',
    url: 'http://a.dryicons.com/images/icon_sets/polygon_icons/png/256x256/computer.png'
  },
  {
    label: 'about me',
    url: 'https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/user.png'
  }
]

export default class LeftBarContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={classNames.leftBarContent}>
        <h1>Portfolio<br/>EmmelineLan</h1>
        <div className={classNames.iconRow}>
          {iconData.map((icon) => <CustomIcon label={icon.label} url={icon.url} />)}
        </div>
      </div>
    )
  }
}