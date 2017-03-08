import React, { Component } from 'react'
import classNames from './styles/concept1.css'

// mobx
import { toJS } from 'mobx'
import store from './mobx/Store'
import {observer} from 'mobx-react'

var iconData = {
  home: {
    value: 'home',
    url: 'http://freevector.co/wp-content/uploads/2010/12/57883-house-building-outline.png'
  },
  skills: {
    value: 'skills',
    url: 'https://cdn3.iconfinder.com/data/icons/mind-process/64/29_skill_learning-512.png'
  },
  projects: {
    value: 'projects',
    url: 'http://www.icon2s.com/img256/256x256-ios7-folder-icon.png'
  },
  about: {
    value: 'about',
    url: 'https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/user.png'
  }
}



@observer class CustomIcon extends Component {
  constructor(props) {
    super(props)

    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    console.log(toJS(store.currentView));
    store.changeView(this.props.label)
  }

  render() {
    const styles = {
      container: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        maxWidth: '100px',
        margin: '0 0 10px 0',
        opacity: store.currentView === this.props.label? 1 : '',
        fontWeight: store.currentView === this.props.label? 'bold': 'normal',
        transition: 'all 0.2s'
      },
      image: {
        filter: 'grayscale(100%)',
        color: 'black',
        width: '60%',
        maxWidth: '64px',
      }
    }
    return (
      <div onClick={this.changeView} className={classNames.hoverableImage} style={styles.container}>
        <img style={styles.image} src={this.props.url} />
        <span style={{marginTop: '10px'}}>{this.props.label}</span>
      </div>
    )
  }
}

export default CustomIcon;