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
        flex: 0.4,
        backgroundColor: 'grey',
      },
      img: {
        position: 'absolute',
        height: '128px',
        width: '128px',
        top: '100%',
        // make sure picture is centered 
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        // background image
        backgroundImage: `url(${fakeProps.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // border radius
        borderRadius: '100%',
        // border: '8px solid rgba(158,158,158 ,0.7)',
      }
    }
    
    return (
      <div className={classNames.headerContainer}>
        <a target="_blank" href={fakeProps.image}><div style={styles.img}>
        </div></a>
      </div>
    )
  }
}