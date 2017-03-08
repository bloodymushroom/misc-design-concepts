import React, { Component } from 'react'
import classNames from './skillsView.css'

// mobx
import store from '../mobx/Store'
import {observer} from 'mobx-react'

@observer
class SkillsExperience extends Component {
  render() {
    return (
      <div className={classNames.experienceContainer}>
      {
        store.workExperience.map((exp) => {
          return (
            <div className={classNames.experienceSquare}>
              <div 
                className={classNames.experienceHeader}
                style={{
                  backgroundImage: `url(${exp.logo})`
                }}
              / >
              <div className={classNames.expSwiper}>
                <div>
                  <span>{exp.role}</span>
                  <span>{exp.from}</span>
                </div>
                <div>
                  <ul>
                  {
                    exp.skills.map(skill => <li style={{fontSize: '0.8em'}}>{skill}</li>)
                  }
                  </ul>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default SkillsExperience;