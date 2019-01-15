import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import {bindActionCreators, createStore} from 'redux';
import reducer from "../reducers";
import {connect} from 'react-redux';

import ChoosePayment from './steps/ChoosePayment';
import Charge from './steps/Charge';
import {nextStep} from "../actions/step";

jss.setup(preset());

const styles = {
	wrapper: {
		width: 900,
		marginTop: 75,
		marginLeft: 'auto',
		marginRight: 'auto',
		boxShadow: '0 0 8px rgba(0,0,0,.5)'
	}
};

function Three() {
	return 'Three'
}

const { classes } = jss.createStyleSheet(styles).attach();
const store = createStore(reducer);
const _step = () => {
	switch (store.getState().step.number) {
		case 1:
			return <ChoosePayment/>
		case 2:
			return <Charge/>
		case 3:
			return <Three/>

		default:
			return <ChoosePayment/>
	}
}

class Content extends Component {
	myCallback = (dataFromChild) => {
		console.log(dataFromChild);

	};

	step() {
		switch (store.getState().step.number) {
			case 1:
				return <ChoosePayment callbackFromParent={this.myCallback} />
			case 2:
				return <Charge/>
			case 3:
				return <Three/>

			default:
				return <ChoosePayment />
		}
	}
	render() {
		return (
			<div>
				{this.step()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state
	}
};

const mapDispatchesToProps = (dispatch) => {
	return {
		dispatch
		//,// это мы подключаем собственные actions
		,actions: bindActionCreators(nextStep, dispatch),
	}
};

export default connect(mapStateToProps, mapDispatchesToProps)(Content);