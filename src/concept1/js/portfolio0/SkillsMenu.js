import React, { Component } from 'react';
import classNames from './skillsView.css'

// mobx
import store from '../mobx/Store'
import {observer} from 'mobx-react'

@observer
class SkillsMenu extends Component {
  render() {
    var activeStyle = {
      background: 'linear-gradient(to right, rgba(250, 250, 250, 0), rgba(250, 250, 250, 0.8))',
      opacity: 1
    }

    return(
      <div className={classNames.skillLabelContainer}>
        {
          store.skills.map( (skill) => {
            return (
              <div 
                onClick={() => store.changeSkill(skill)} 
                className={classNames.skillLabel}
                style={store.currentSkill === skill? activeStyle : {}}
              >
                <h3>{skill}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SkillsMenu