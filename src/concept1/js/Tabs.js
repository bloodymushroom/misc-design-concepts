import { Component } from 'react'

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: this.props.tabs || ['tab 1', 'tab2', 'tab3']
    }

    render() {
      return(
        <div>
          
        </div>
      )
    }
  }


}