// @flow
import React, { Component } from 'react'

// material ui
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// components
import LeftBar from './LeftBar'
import ContentView from './ContentView'

import classNames from './concept1.css'


type Props = {}
type State = {
	count: number
}

export default class Hello extends Component {
	props: Props
	state: State

	constructor(props: Props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount() {
		this.setState({
			count: ++this.state.count
		})
	}

	componentDidMount() {
		setInterval(this.incrementCount.bind(this), 500)
	}

	render() {
		return (
			<MuiThemeProvider>
				<div style={{height: '100%'}} className={classNames.container} >
					<LeftBar />
					<ContentView />
				</div>
			</MuiThemeProvider>
		)
	}
}
