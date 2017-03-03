import React, {Component} from 'react'

//css
import classNames from './concept1.css'

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div className={classNames.socialMediaBar}>
        <span>Connect with me!</span>
        <div>
          <a target='_blank' href='https://www.linkedin.com/in/emmeline-lan'>
            <img className='nav-icon' src='http://i.imgur.com/AUtCHRm.png'/>
          </a>
          <a target='_blank' href='https://github.com/bloodymushroom'>
            <img className='nav-icon' src='http://i.imgur.com/XSxut9c.png'/>
            
          </a>
          <a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&to=emmeline.lan@gmail.com'>
            <img style={{color: 'white'}} className='nav-icon' src='http://i.imgur.com/DIcvATQ.png'/>
          </a>
        </div>
      </div>
    )
  }
}