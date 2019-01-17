import React, { Component } from 'react';
import ShopLogo from '../assets/70009.png';
import jss from 'jss';
import preset from 'jss-preset-default';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMoney} from "../actions/step";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

jss.setup(preset());

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
// const activeCrumb = (() => {
// 	return store.getState().step.step - 1;
// })();

class Header extends Component {
	render() {
		const {orderAmount} = this.props.stepMoneyProp;
		const {number} = this.props.stepMoneyProp;

		return (
			<div>
				<a href="true" className={classes.toshop}>Назад в магазин</a>
				<a href="true" className={classes.login}>Вход в личный кабинет</a>

				<div className={classes.head}>
					<img src={ShopLogo} alt="true" />

					<div className={classes.description}>
						<p className=''>оплата заказа в магазине</p>
						<a href="true" className=''>Тестовый магазин</a>
						&nbsp;
						<span>{orderAmount} рублей</span>
					</div>
				</div>

				<div>
					{/*<Router>*/}
					<ul className={`${classes.breadcrumbs}`}>
						{
							crumbs.map((item, index) => {
								let act = index === (number - 1) ? 'active' : '';
								let bold = index === (number - 1) ? 'bold' : '';
								//
								return (
									<li key={index}
										style={{fontWeight: bold}}
											className={
												`
												${classes.breadcrumbsLi}
												${act}
												`
											}>{item.title}</li>
								);
							})
						}

					</ul>
					{/*</Router>*/}
				</div>
			</div>
		)
	}
}

const getProps = (state) => ({
	stepMoneyProp: state.step
});

const setActions = (dispatch) => bindActionCreators({
	getMoneyProp: getMoney
}, dispatch);

export default connect(getProps, setActions)(Header);