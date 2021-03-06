import React, { Component } from 'react';
import Banks from './payments/banks';
import Ecom from './payments/ecom';
import Mobile from './payments/mobile';
import Other from './payments/other';

import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
const styles = {
	wrapper: {
		letterSpacing: -0.3
	},
	column: {
		width: 225,
		display: 'inline-block',
		verticalAlign: 'top',
		letterSpacing: 'normal',
		textAlign: 'center'
	}
};
const { classes } = jss.createStyleSheet(styles).attach();

class ChoosePayment extends Component {
	render() {
		const {onComplete} = this.props;

		return (
			<div className={classes.wrapper}>
				<div className={classes.column}>
					<h4>Банковской картой</h4>
					<Banks paymentType={onComplete} />
				</div>
				<div className={classes.column}>
					<h4>Электронным кошельком</h4>
					<Ecom/>
				</div>
				<div className={classes.column}>
					<h4>Сотовые операторы</h4>
					<Mobile/>
				</div>
				<div className={classes.column}>
					<h4>Другие способы</h4>
					<Other/>
				</div>
			</div>
		)
	}
}

export default ChoosePayment;