import React, {Component} from 'react'
import classNames from './skillsView.css'

var downloadPDF = 'https://drive.google.com/uc?id=0B9hBD4lGAI3jQ3g3Wm9aY25QQmc&export=download'
var downloadDocX = 'https://drive.google.com/uc?id=0B9hBD4lGAI3jTEtrUVVONUhWXzQ&export=download'

// mobx
import store from '../mobx/Store'
import {observer} from 'mobx-react'


var links = {
  preview: '',

}
var icons = {
  preview: 'https://cdn4.iconfinder.com/data/icons/software-menu-icons/256/SoftwareIcons-21-128.png',
  pdf: 'https://cdn2.iconfinder.com/data/icons/file-8/128/file_pdf_download-128.png',
  docx: 'https://cdn2.iconfinder.com/data/icons/file-format-colorful/100/docx-128.png'
}

@observer
class ResumeBar extends Component {
  dragDownload(e){
    console.log(e.dataTransfer)
    e.dataTransfer.setData('DownloadURL', downloadLink)
  }

  showPreview(e) {
    e.preventDefault();
    store.previewShowing(true);
  }

  render() {
    return (
      <div className={classNames.resumeContainer}>
        <span>download full resume:</span>
        <a onClick={this.showPreview} href='#'>
          <img style={{filter: 'invert(1)'}} src={icons.preview}/>
          Preview
        </a>
        <a draggable='false' href={downloadPDF}>
          <img src={icons.pdf}/>
          PDF
        </a>
        <a draggable='false' href={downloadDocX}>
          <img src={icons.docx}/>
          DocX
        </a>
        { false && <a 
          draggable='true'
          onClick={(e) => e.preventDefault()} 
          href={downloadPDF}
          onDragLeave={(e) => this.dragDownload(e), false}
        >Drag Me!</a>
        }
      </div>
    )
  }
}

export default ResumeBar