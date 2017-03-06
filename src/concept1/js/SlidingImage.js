import React, {Component} from 'react'
import classNames from './styles/slidingImage.css'

var images = {
	website: 'http://i.imgur.com/6DFKjJT.png',
	balsamiq: 'http://i.imgur.com/3tjhwRk.png'
}

export default class SlidingImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			shouldMove: false,
			overWidth: '30%',
			left: null
		}

		this.changeImage = this.changeImage.bind(this);
		this.mouseOn = this.mouseOn.bind(this);
		this.mouseOff = this.mouseOff.bind(this);
		this.computePosition = this.computePosition.bind(this);
	}

	componentDidMount() {
		this.computePosition();
		//set left coordinate
		window.addEventListener('resize', this.computePosition)
	}

	computePosition() {
		var relativeElement = this.slidingOver.getBoundingClientRect();
		this.setState({
			left: relativeElement.left
		})
	}

	changeImage(e, handler) {
		if (!this.state.shouldMove && handler === 'mouseDown') {
			return;
		}

		// container coordinates
		var mousePosition = e.pageX;
		var dX = mousePosition - this.state.left;

		console.dir(dX)
		this.setState({
			overWidth: `${dX}px`
		})
	}

	mouseOn() {
		this.setState({
			shouldMove: true
		})
	}

	mouseOff() {
		this.setState({
			shouldMove: false
		})
	}

	render() {
		let styles = {
			slidingUnder: {
				backgroundImage: `url(${images.website})`,
			},
			slidingOver: {
				backgroundImage: `linear-gradient(rgba(21,101,192 ,0.5), rgba(21,101,192 ,0.5)), url(${images.balsamiq})`,
				width: this.state.overWidth
			}
		}

		return (
			<div 
				style={styles.slidingUnder} 
				className={classNames.slidingUnder}
				onMouseMove={(e) => this.changeImage(e, 'mouseDown')}
				onMouseDown={this.mouseOn}
				onMouseUp={this.mouseOff}
				onMouseLeave={this.mouseOff}
				onClick={(e) => this.changeImage(e, 'click')}
			>
				<img className={classNames.bgImage} src='http://i.imgur.com/rnmKu8v.png'/>
				<div 
					style={styles.slidingOver} 
					className={classNames.slidingOver}
					ref={(ref) => this.slidingOver = ref}
				>
					<div className={classNames.mover}></div>
				</div>
			</div>
		)
	}
}
