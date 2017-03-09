import React, { Component } from 'react'

class AboutView extends Component {

  downloadDrag(e) {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('DownloadURL', `${url3}`)
  }

  render() {
    return (
      <div>
        Art!
      </div>
    )
  }
}

export default AboutView