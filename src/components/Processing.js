import React, {Component} from 'react';
import kitten from './image.png';

import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
const styles = {
	cat: {
		display: 'block',
		margin: '0 auto'
	}
};
const { classes } = jss.createStyleSheet(styles).attach();

class Processing extends Component {
	constructor(props) {
		super(props);

		this.startTimer();
	}

	startTimer() {
		setTimeout(() => {
			this.props.onReady();
		}, 5000);
	}

	render() {
		// console.log(this.props)
		return(
			<div>
				<img src={kitten} className={classes.cat} alt=""/>
			</div>
		)

	}
}

export default Processing;