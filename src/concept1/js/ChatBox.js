import React, { Component } from 'react';

class ChatBox extends Component {
  init() {
    if( 'WebSocket' in window) {
      alert('socket is supported')

      var connection = new WebSocket('ws://localhost:8080');

      connection.onopen = function() {
        console.log("hello world")
      }

      connection.onerror = function(err) {
        console.log(err)
      }

      connection.onmessage = function(e) {
        console.log('received: ', e.data)
      }
    } else {
      alert('sorry, your browser does not support html5 chat :(')
    }
  }
}

export default ChatBox;