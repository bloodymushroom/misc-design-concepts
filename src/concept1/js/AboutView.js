import React, { Component } from 'react'
import classNames from './styles/aboutView.css'


//components
import FeedbackForm from './AboutComponents/FeedbackForm'
import AboutHeader from './AboutComponents/AboutHeader'
import PaintingsGallery from './AboutComponents/PaintingsGallery'

class AboutView extends Component {

  downloadDrag(e) {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('DownloadURL', `${url3}`)
  }

  render() {
    return (
      <div className={classNames.aboutContainer}>
        <AboutHeader />
        <PaintingsGallery />
        <FeedbackForm />
      </div>
    )
  }
}

export default AboutView