import React, { Component } from 'react'
import classNames from './styles/projectView.css'

// components
import ProjectDiv from './ProjectDiv'


export default class ProjectView extends Component {
  render() {
    return (
      <div className={classNames.projectContainer}>
        {
          [1, 2, 3, 4, 5, 6].map((i) => {
            return (
            <ProjectDiv><span>Div {i}</span><span>Expanded {i}</span></ProjectDiv>
          )
          })
        }
      </div>
    )
  }
}