// @flow
import React from 'react'
import { render } from 'react-dom'

import App from './App'

// mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'

render(
  <App  />,
  window.document.getElementById('app-container')
)
