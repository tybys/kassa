import React, {Component} from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
/*const styles = {
	cat: {
		display: 'block',
		margin: '0 auto'
	}
};
const { classes } = jss.createStyleSheet(styles).attach();*/

class Success extends Component {
	render() {
		return (
			<div>Success!</div>
		)
	}
}

export default Success;