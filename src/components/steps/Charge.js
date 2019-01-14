import React, { Component } from 'react';
import Cardui from '../cardui';

import { createStore } from 'redux';
import reducer from "../../reducers";

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
	}
};

const { classes } = jss.createStyleSheet(styles).attach();
const store = createStore(reducer);

function Charge() {
	return (
		<div>
			Стоимость заказа:	<strong>{store.getState().step[0].orderAmount}</strong> рублей<br/>
			Заплатить до:	<strong>14 января 8:50</strong><br/>
			Описание заказа:	<strong>Оплата заказа в Тестовом магазине ROBOKASSA</strong><br/>
			Итого к оплате:	<strong className={classes.green}>{store.getState().step[0].orderAmount} рублей</strong>

			<Cardui/>
		</div>
	)
}

export default Charge;