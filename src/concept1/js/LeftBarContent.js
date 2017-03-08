import React, { Component } from 'react'
// css
import classNames from './styles/concept1.css'
import CustomIcon from './CustomIcon'

var iconData = [
  {
    label: 'home',
    url: 'https://images.vexels.com/media/users/3/136193/isolated/lists/dcc07bc6d38972b280399b3f24e73219-home-icon.png'
  },
  {
    label: 'skills',
    url: 'http://sovalacc.com/wp-content/uploads/2015/09/SOVALACC-WEBSITE-ICON-14-e1447528734353.png',
    // url: 'https://cdn2.iconfinder.com/data/icons/app-icons-7/512/tools-2-128.png'
  },
  {
    label: 'projects',
    url: 'http://a.dryicons.com/images/icon_sets/polygon_icons/png/256x256/computer.png'
  },
  {
    label: 'about',
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
        <div className={classNames.headerCategory}>navigation</div>
        <div className={classNames.iconRow}>
          {iconData.map((icon) => <CustomIcon key={icon.label} label={icon.label} url={icon.url} />)}
        </div>
      </div>
    )
  }
}