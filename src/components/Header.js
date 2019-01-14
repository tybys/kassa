import React, { Component } from 'react';
import ShopLogo from '../assets/70009.png';
import jss from 'jss';
import preset from 'jss-preset-default';

import reducer from '../reducers';
import { createStore } from 'redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

jss.setup(preset());

const store = createStore(reducer);
const styles = {
	toshop: {
		float: 'left',
		pointerEvents: 'none',
		transform: 'translateY(-29px)'
	},
	login: {
		float: 'right',
		pointerEvents: 'none',
		transform: 'translateY(-29px)'
	},
	head: {
		clear: 'both'
	},
	description: {
		display: 'inline-block',
		verticalAlign: 'top'
	},
	breadcrumbs: {
		listStyleType: 'none',
		padding: 0,
		marginTop: 10,
		borderTop: '1px solid black',
		borderBottom: '1px solid black'
	},
	breadcrumbsLi: {
		//float: 'left',
		display: 'inline-block',
		width: '33.333333%',
		textAlign: 'center'
	}
};
const { classes } = jss.createStyleSheet(styles).attach();
const crumbs = [
	{title: 'Выбор способа оплаты'},
	{title: 'Оплата счета'},
	{title: 'Подтверждение'}
];
const activeCrumb = (() => {
	return store.getState().step[0].step - 1;
})();

function Header() {
	return (
		<div>
			<a href="#" className={classes.toshop}>Назад в магазин</a>
			<a href="#" className={classes.login}>Вход в личный кабинет</a>

			<div className={classes.head}>
				<img src={ShopLogo} />

				<div className={classes.description}>
					<p className=''>оплата заказа в магазине</p>
					<a href="#" className=''>Тестовый магазин</a>
					&nbsp;
					<span>{store.getState().step[0].orderAmount} рублей</span>
				</div>
			</div>

			<div>
				<Router>
					<ul className={`${classes.breadcrumbs}`}>
						{
							crumbs.map((item, index) => {
								let act = index === activeCrumb ? 'active' : '';
								let bold = index === activeCrumb ? 'bold' : '';

								return (
									<li key={index} style={{fontWeight: bold}} className={`${classes.breadcrumbsLi} ${act}`}>{item.title}</li>
								);
							})
						}

					</ul>
				</Router>
			</div>
		</div>
	)
}

export default Header;