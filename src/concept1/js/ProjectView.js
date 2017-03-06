import React, { Component } from 'react'
import classNames from './styles/projectView.css'

// components
import ProjectDiv from './ProjectDiv'
import ProjectActive from './ProjectActive'

// mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'

@observer
class ProjectView extends Component {
  render() {
    return (
      <div className={classNames.projectContainer}>
        <ProjectActive project={store.projects[store.currentProject]}/>
        <div className={classNames.inactiveDiv}>
        {
          store.projects.map((project, index) => {
            return (
            <ProjectDiv key={index} id={index} project={project} />
          )
          })
        }
        </div>
      </div>
    )
  }
}

export default ProjectView