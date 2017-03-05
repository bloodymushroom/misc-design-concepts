import React, { Component } from 'react'
import classNames from './styles/projectView.css'

export default class ProjectDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }

    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv() {
    console.log('togglied')
    this.setState({
      expanded: this.state.expanded? false: true
    })
  }

  render() {
    var expandedStyle = {
      order: 1,
      width: '80%',
      height: '40%'
    }

    return (
      <div 
        style={this.state.expanded? expandedStyle : {}} 
        className={classNames.projectDiv}
        onClick={this.toggleDiv}
      >
        {!this.state.expanded && this.props.children[0]}
        {this.state.expanded && this.props.children[1]}
      </div>
    )
  }
}