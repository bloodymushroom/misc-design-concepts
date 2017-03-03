import React, {Component} from 'react';

// css
import classNames from './concept1.css'

var fakeProps = {
  image: 'http://i.imgur.com/MJdvfak.jpg'
}

export default class HeaderIcon extends Component {
  render() {
    var styles = {
      container: {
        position: 'relative',
        flex: 0.3,
        backgroundColor: 'grey'
      },
      img: {
        position: 'absolute',
        height: '200px',
        width: '200px',
        top: '100%',
        // make sure picture is centered 
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        // background image
        backgroundImage: `url(${fakeProps.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: '4px green solid',
        // border radius
        borderRadius: '100%'
      }
    }
    
    return (
      <div style={styles.container}>
        <div style={styles.img}>
        </div>
      </div>
    )
  }
}