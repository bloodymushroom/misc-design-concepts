import React, {Component} from 'react'
import classNames from '../styles/aboutView.css'


class FeedbackForm extends Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      email: '',
      message: '',
      formStatus: null,
      statusColor: 'transparent'
    };
  }

  handleInput(e) {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    var context = this;

    if (this.state.userName.length === 0 || this.state.message.length === 0) {
      this.setState({
        formStatus: 'please fill out both name and message',
        statusColor: 'yellow'
      })
      return;
    }

    fetch('https://twilio-sms-server.herokuapp.com/text', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: context.state.userName,
        email: context.state.email,
        message: context.state.message
      })
    })
    .then( (res) => res.json())
    .then( (data) =>  {
        this.setState({
          userName: '',
          email: '',
          message: '',
          formStatus: 'message sent! thank you.',
          statusColor: 'green'
        })
      })
    .catch( (e) => {
      this.setState({
        formStatus: 'unable to send',
        statusColor: 'red'
      })
    })
  }

  render() {
    return (
      <div className={classNames.feedbackContainer}>
        <span style={{fontSize: '0.8em'}}>Any comments, requests, or feedback?</span>
        <form className={classNames.feedbackForm} id='feedbackForm'>
          <input 
            className={classNames.feedbackText}
            onChange={this.handleInput.bind(this)} 
            ref='input1'
            type='text' 
            name='userName'
            placeholder='your name' 
            required 
            value={this.state.userName}
            />
          <input 
            className={classNames.feedbackText}
            onChange={this.handleInput.bind(this)} 
            ref='input2'
            type='email' 
            name='email'
            placeholder='your email (optional)' 
            value={this.state.email} 
          />
          <textarea 
            className={classNames.feedbackText}
            onChange={this.handleInput.bind(this)}
            ref='input3'
            name='message'
            form='feedbackForm' 
            maxLength={200} 
            placeholder='Enter a message (or email me at EmmelineLan@gmail.com)'
            value={this.state.message}
            required
            />
          <input className={classNames.formSubmit} onClick={this.onSubmit.bind(this)} type='submit' style={{width: '80%'}} value='SUBMIT' />
        </form>
        <span 
          style={{
            color: this.state.statusColor,
            fontSize: '0.7em'
          }}
        >
          {this.state.formStatus}
        </span>
      </div>
    )
  }
}

export default FeedbackForm