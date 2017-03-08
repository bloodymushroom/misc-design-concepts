import React, {Component} from 'react'
//css
import classNames from './portfolio0/skillsView.css'



// components
import SkillSpinner from './portfolio0/SkillSpinner'
import SkillChart from './portfolio0/SkillChart'
import Tooltip from './portfolio0/Tooltip'
import SkillsMenu from './portfolio0/SkillsMenu'
import ResumeBar from './portfolio0/ResumeBar'
import SkillsExperience from './portfolio0/SkillsExperience'

// store
// mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'

@observer
class SkillsView extends Component {
  closeModal(e) {
    store.previewShowing(false);
  }

  escModal(e) {
    console.log('hi')
    if (e.keyCode === '27') {
      store.previewShowing(false);
    }
  }

  previewModal() {
    return (
      <div onKeyDown={this.escModal} onClick={this.closeModal} className={classNames.resumeModal}>
        <iframe onKeyDown={this.escModal} src="https://drive.google.com/file/d/0B9hBD4lGAI3jQ3g3Wm9aY25QQmc/preview" width="640" height="480"></iframe>
      </div>
    )
  }

  render() {
  console.log(classNames.skillsView)
    return (
      <div className={classNames.skillsView}>
        <ResumeBar />
        {store.showPreview && this.previewModal()}
        <span>Skills:</span>
        <div className={classNames.chartSubContainer}>
          <SkillsMenu />
          <SkillChart activeChart={store.currentSkill}/>
        </div>
        <span>Experience & Education:</span>
        <SkillsExperience />
      </div>
    )
  }
}
 //       <SkillSpinner setActiveChart={(str) => store.changeSkill(str)} activeChart={store.currentSkill}/>

export default SkillsView;