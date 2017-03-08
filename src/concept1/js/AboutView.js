import React, { Component } from 'react'


var url = 'application/pdf:HTML5CheatSheet.pdf:http://thecssninja.come/demo/gmail_dragout/html5-cheat-sheet.pdf'
var url2 = 'http://i.imgur.com/vtx96nd.png'
var urlview = 'https://drive.google.com/uc?id=0B9hBD4lGAI3jQ3g3Wm9aY25QQmc&export=download'
var url3 = 'https://drive.google.com/uc?id=0B9hBD4lGAI3jQ3g3Wm9aY25QQmc&export=download'
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