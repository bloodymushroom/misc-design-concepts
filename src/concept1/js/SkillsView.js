import React, {Component} from 'react'
//css
import classNames from './portfolio0/skillsView.css'



// components
import SkillChart from './portfolio0/SkillChart'
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
    var headerStyle = {
      alignSelf: 'flex-start',
      marginLeft: '10%',
      width: '20%',
      textTransform: 'lowercase',
      borderBottom: '1px solid rgba(250, 250, 250, 0.8)'
    }
  console.log(classNames.skillsView)
    return (
      <div className={classNames.skillsView}>
        <ResumeBar />
        {store.showPreview && this.previewModal()}
        <div style={headerStyle} >Skills</div>
        <div className={classNames.chartSubContainer}>
          <SkillsMenu />
          <SkillChart activeChart={store.currentSkill}/>
        </div>
        <div style={headerStyle}>Experience & Education</div>
        <SkillsExperience />
      </div>
    )
  }
}
 //       <SkillSpinner setActiveChart={(str) => store.changeSkill(str)} activeChart={store.currentSkill}/>

export default SkillsView;