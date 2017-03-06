// @flow
import React, { Component } from 'react'

// material ui
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// components
import LeftBar from './LeftBar'
import ContentView from './ContentView'
import ProjectView from './ProjectView'

//css
import classNames from './styles/concept1.css'

// mobx
import store from './mobx/Store'
import {observer} from 'mobx-react'

// class PageState {
// 	views = ['home', 'skills', 'projects', 'about'];

// 	@observable currentView = 'home';
// }

// const pageState = new PageState();

type Props = {}
type State = {
	count: number
}

@observer
class App extends Component {
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
					{store.currentView === 'home' && <ContentView />}
					{store.currentView === 'projects' && <ProjectView />}
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App;