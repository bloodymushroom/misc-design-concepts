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
      imageCount: 0,
      showPreview: false,
      previewUrl: ''
    }

    this.openPreview = this.openPreview.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  openPreview(e, url) {
    e.preventDefault();

    this.setState({
      showPreview: true,
      previewUrl: url
    })
  }

  closePreview() {
    this.setState({
      showPreview: false
    })
  }

  incrementCount() {
    var length = this.props.project.images.length;
    this.setState({
      imageCount: this.state.imageCount + 1
    })

    console.log('animate function', this.refs.gallery.animate)
    this.refs.gallery.animate([
      {transform: 'translateX(100%)', opacity: 0},
      {transform: 'translateX(0%)', opacity: 1}
    ], {
      duration: 200,
      iterations: 1
    })
  }

  decrementCount() {
    this.setState({
      imageCount: this.state.imageCount - 1
    })

    this.refs.gallery.animate([
      {transform: 'translateX(-100%)', opacity: 0},
      {transform: 'translateX(0%)', opacity: 1}
    ], {
      duration: 200,
      iterations: 1
    })
  }

  render() {
    // var imgUrl = ${this.props.project.images[Math.abs(this.state.imageCount % this.props.project.images.length)]
    var backgroundPicture = {
      backgroundImage:`url(${this.props.project.images[Math.abs(this.state.imageCount % this.props.project.images.length)]})`
    }
    return (
      <div className={classNames.activeContainer}>
        { 
          this.state.showPreview && 
            <div 
              style={{backgroundImage: `url(${this.state.previewUrl})`}} 
              className={classNames.galleryPreview} 
              onClick={this.closePreview.bind(this)}
            >
            <div onClick={this.closePreview.bind(this)} className={classNames.galleryX}>X</div>
            </div>
        }
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
          <div className={classNames.galleryContainer}>
            <div 
              ref='gallery'
              style={backgroundPicture} 
              className={classNames.galleryImage}>
            </div>
          </div>
          <img onClick={this.incrementCount} className={classNames.hoverableImage} style={{height: '50px', width: 'auto', transform: 'rotate(180deg)'}} src={arrows}></img>
        </div>
      </div>
    )
  }
}
            // transitionName={{
            //   appear: classNames.exampleAppear,
            //   appearActive: classNames.exampleAppearActive,
            //   enter: classNames.exampleAppear,
            //   enterActive: classNames.exampleAppearActive
            // }}

export default ProjectActive