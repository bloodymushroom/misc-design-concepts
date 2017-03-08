import React, {Component} from 'react';
import classNames from './skillsView.css'

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style || {}} className={classNames.tooltip}>
        <span className={classNames.tooltipContent}>{this.props.content}</span>
      </div>
    )
  }
}