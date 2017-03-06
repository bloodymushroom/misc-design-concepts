import React, { Component } from 'react'
import classNames from './styles/projectView.css'

// mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'


@observer
class ProjectDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }

    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv() {
    console.log(this.props.id)
    store.currentProject = this.props.id;
  }

  render() {
    console.log(this.props.id, store.currentProject)
    var isActiveStyle = {
      opacity: 1
    }

    return (
      <div 
        style={this.props.id === store.currentProject? isActiveStyle : {}} 
        className={[classNames.projectDiv, classNames.hoverableImage].join(' ')}
        onClick={this.toggleDiv}
      >
        <span>{this.props.project.name}</span>
        <img className={classNames.inactiveImg} src={this.props.project.icon}/>
        <span style={{fontSize: '0.8em'}}>{this.props.project.description}</span>
        
      </div>
    )
  }
}

export default ProjectDiv