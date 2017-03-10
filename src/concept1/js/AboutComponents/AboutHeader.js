import React, {Component} from 'react'
import classNames from '../styles/aboutView.css'


export default class AboutHeader extends Component {
  render() {
    return(
      <div className={classNames.aboutHeader}>
        <h1>thank you for visiting</h1>
        <span>
          Hello! My name is Emmeline Lan and I am a 
          full stack engineer with primary focus in Javascript, React, 
          Node/Express, MySQL, and MongoDB.
        </span>
        <span>
          I am passionate about HTML5, CSS3, and MV* frameworks! <br />Other interests include healthcare, semiconductors, and data analysis.
        </span>
        <span>I love digital and traditional art. Check out my non-programming gallery:</span>
      </div>
    )
  }
}