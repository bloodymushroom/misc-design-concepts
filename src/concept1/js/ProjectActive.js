import React, { Component } from 'react';
import classNames from './styles/projectView.css'

//mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'

var arrows = 'http://www.nsi4.com/images/arrow-left.png'
var stack = 'http://icons.veryicon.com/png/System/Beautiful%20Flat%20Mono%20Color/stack.png'

//mobx

@observer
class ProjectActive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageCount: 0
    }

    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    var length = this.props.project.images.length;
    this.setState({
      imageCount: this.state.imageCount + 1
    })
  }

  decrementCount() {
    this.setState({
      imageCount: this.state.imageCount - 1
    })
  }

  render() {
    var backgroundPicture = {
      backgroundImage:`url(${this.props.project.images[Math.abs(this.state.imageCount % this.props.project.images.length)]})`
    }
    return (
      <div className={classNames.activeContainer}>
        <div className={classNames.activeLeft}>
          <h1 className={classNames.projectHeaderCategory}>{this.props.project.name}</h1>
          <div>
            <img style={{height: '24px', width:'24px'}} src={stack} />
            {this.props.project.stack.map(stack => <span>{stack}</span>)}
          </div>
          <ul>
          {this.props.project.responsibilities.map((item) => {
            return (<li>{item}</li>)
          })}
          </ul>
        </div>
        <div className={classNames.activeRight}>
          <img  onClick={this.decrementCount} className={classNames.hoverableImage} style={{height: '50px', width: 'auto'}} src={arrows}></img>
          <div style={backgroundPicture} className={classNames.gallery}>
          </div>
          <img onClick={this.incrementCount} className={classNames.hoverableImage} style={{height: '50px', width: 'auto', transform: 'rotate(180deg)'}} src={arrows}></img>
        </div>
      </div>
    )
  }
}

export default ProjectActive