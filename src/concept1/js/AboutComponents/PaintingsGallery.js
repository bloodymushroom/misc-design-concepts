import React, {Component} from 'react'
import classNames from '../styles/aboutView.css'


var paintings = [
  {
    title: 'red lantern',
    icon: 'http://i.imgur.com/j2u55Erb.jpg',
    img: 'http://i.imgur.com/j2u55Er.jpg'
  },
  {
    title: 'new york streets',
    icon: 'http://i.imgur.com/VHFXE9db.jpg',
    img: 'http://i.imgur.com/VHFXE9d.jpg'
  },
  {
    title: 'seals',
    icon: 'http://i.imgur.com/UhjQA21b.jpg',
    img: 'http://i.imgur.com/UhjQA21.jpg'
  },
  {
    title: 'red lady',
    icon: 'http://i.imgur.com/pxi09q5b.jpg',
    img: 'http://i.imgur.com/pxi09q5.jpg'
  },
  {
    title: 'bunny man',
    icon: 'http://i.imgur.com/MdmErVvb.jpg',
    img: 'http://i.imgur.com/MdmErVv.jpg'
  },
  {
    title: 'city blues',
    icon: 'http://i.imgur.com/hfjXBq2b.jpg',
    img: 'http://i.imgur.com/hfjXBq2.jpg'
  },
  {
    title: 'spanish dancers',
    icon: 'http://i.imgur.com/NnZIq7Nb.jpg',
    img: 'http://i.imgur.com/NnZIq7N.jpg'
  },
  {
    title: 'tires',
    icon: 'http://i.imgur.com/A5oQJwlb.jpg',
    img: 'http://i.imgur.com/A5oQJwl.jpg'
  },
  {
    title: 'hand in hand',
    icon: 'http://i.imgur.com/sDd3bPlb.jpg',
    img: 'http://i.imgur.com/sDd3bPl.jpg'
  },
  // {
  //   title: 'makeup',
  //   icon: 'http://i.imgur.com/NnZIq7Nb.jpg',
  //   img: 'http://i.imgur.com/NnZIq7N.jpg'
  // },
  {
    title: 'soldier',
    icon: 'http://i.imgur.com/qppjFkfb.jpg',
    img: 'http://i.imgur.com/qppjFkf.jpg'
  }

]

class PaintingsGallery extends Component {
  constructor() {
    super();

    this.state = {
      showPreview: false,
      previewUrl: ''
    }
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

  render() {
    return(
      <div className={classNames.aboutGallery}>
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
        {
          paintings.map((painting) => {
            return (
              <a onClick={(e) => this.openPreview(e, painting.img)} href={painting.img}>
                <img className={classNames.aboutImage} src={painting.icon} />
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default PaintingsGallery;