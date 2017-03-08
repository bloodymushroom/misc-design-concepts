import React, {Component} from 'react'
import classNames from './skillsView.css'

//components
import Tooltip from './Tooltip'

// mobx
import store from '../mobx/Store'
import {observer} from 'mobx-react'

@observer
class SkillSpinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldTip: true,
      rotation: 0
    }

    this.removeTip = this.removeTip.bind(this);
    this.transformDivs = this.transformDivs.bind(this);
  }

  removeTip() {
    this.setState({
      shouldTip: false
    })
  }

  transformDivs(n, str) {
    this.props.setActiveChart(str); 

    this.setState({
      rotation: n
    })

      // var deg = document.documentElement.style.setProperty('--rotation', `${n + 'deg'}`);
    
    // var cat1 = document.querySelector('cat1 *');
    // var cat2 = document.querySelector('cat2 *');
    // var cat3 = document.querySelector('cat3 *');
    // var cat4 = document.querySelector('cat4 *');

    // console.log(this.refs)
    // this.refs.cat1.style.transform = `rotate(${-n - 90 + 'deg'}) translate(-50%)`
    // this.refs.cat2.style.transform = `rotate(${-n - 180 + 'deg'}) translate(-50%)`
    // this.refs.cat3.style.transform = `rotate(${-n - 270 + 'deg'}) translate(-50%)`
    // this.refs.cat4.style.transform = `rotate(${-n + 'deg'}) translate(-50%)`

  }

  render () {
    var styleTransforms = {
      main: {
        transform: `rotate(${this.state.rotation}deg)`, 
        transition: 'transform 2s'
        },
      cat1: {
        transform: `rotate(${-this.state.rotation - 90 + 'deg'}) translate(-50%)`
      },
      cat2: {
        transform: `rotate(${-this.state.rotation - 180 + 'deg'}) translate(-50%)`
      },
      cat3: {
        transform: `rotate(${-this.state.rotation - 270 + 'deg'}) translate(-50%)`
      },
      cat4: {
        transform: `rotate(${-this.state.rotation + 'deg'}) translate(-50%)`
      }



    }
    return (
      <div onClick={this.removeTip}>
        <div style={{transform: `rotate(${this.state.rotation}deg)`, transition: 'transform 2s'}} className={classNames.transformer}>
        {this.state.shouldTip && <Tooltip style={{top: '-150%', left: '60%'}} content="Click a category!"/>}
          <div ref='cat1' style={styleTransforms.cat1} className={['cat1', classNames.cat, classNames.cat1].join(' ')}>
            <div onClick={() => this.transformDivs(0, 'Languages')}>
            Languages
            </div>
          </div>
          <div ref='cat2' style={styleTransforms.cat2} className={['cat2', classNames.cat, classNames.cat2].join(' ')}>
            <div onClick={() => this.transformDivs(-90, 'Frameworks')}>
            Frameworks
            </div>
          </div> 
          <div ref='cat3' style={styleTransforms.cat3} className={['cat3', classNames.cat, classNames.cat3].join(' ')}>
            <div onClick={() => this.transformDivs(180, 'BackEnd')}>
            Back End
            </div>
          </div>
          <div ref='cat4' style={styleTransforms.cat4} className={['cat4', classNames.cat, classNames.cat4].join(' ')}>
            <div onClick={() => this.transformDivs(90, 'Other')}>
            Other
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default SkillSpinner