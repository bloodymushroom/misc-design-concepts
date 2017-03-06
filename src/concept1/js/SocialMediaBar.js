import React, {Component} from 'react'

//css
import classNames from './styles/concept1.css'

var icons = [
  {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/emmeline-lan',
    icon: 'http://i.imgur.com/AUtCHRm.png',
    caption: 'linkedin.com/in/emmeline-lan'
  },
  {
    title: 'github',
    url: 'https://github.com/bloodymushroom',
    icon: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png',
    caption: 'github.com/bloodymushroom'
  },
  {
    title: 'gmail',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=emmeline.lan@gmail.com',
    icon: 'https://www.layered-reality.com/img/social/gmail.png',
    caption: 'emmeline.lan@gmail.com'
  }
]

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div className={classNames.socialMediaBar}>
        <div className={classNames.headerCategory}>connect</div>
        { 
          icons.map((item) => {
            return (
              <div key={item.title} className={[classNames.socialMediaContent, classNames.hoverableImage].join(' ')}>
                <a target='_blank' href={item.url}>
                  <img src={item.icon}/>
                </a>
                <span>{item.caption}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}