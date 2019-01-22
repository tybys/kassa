import React, { Component } from 'react';
import Cardui from '../cardui';

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
	},
	green: {
		color: 'green',
		fontSize: 20
	},
	carduiwrap: {
		padding: '28px 34px'
	}
};

const { classes } = jss.createStyleSheet(styles).attach();

class Charge extends Component {
	render() {
		// const {orderAmount} = this.props.stepMoneyProp;
		const {onInit} = this.props;
		const {order} = this.props;

		return (
			<div className={classes.carduiwrap}>
				Стоимость заказа:	<strong>
				{order}
			</strong> рублей<br/>
				Заплатить до:	<strong>14 января 8:50</strong><br/>
				Описание заказа:	<strong>Оплата заказа в Тестовом магазине ROBOKASSA</strong><br/>
				<hr/>
				Итого к оплате:&nbsp;
				<strong className={classes.green}>
				{order}&nbsp;рублей
				</strong>

				<Cardui validPay={onInit} />
			</div>
		)
	}
}

export default Charge;