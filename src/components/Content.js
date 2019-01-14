import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import { createStore } from 'redux';
import reducer from "../reducers";
import {connect} from 'react-redux';

import ChoosePayment from './steps/ChoosePayment';
import Charge from './steps/Charge';

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
const step = (() => {
	switch (store.getState().step.step) {
		case 1:
			return <ChoosePayment/>
		case 2:
			return <Charge/>
		case 3:
			return <Three/>

		default:
			return <ChoosePayment/>
	}
})();

function Content() {
	return (
		<div>{step}</div>
	)
}

export default connect(
	state => ({}),
	dispatch => ({})
)(Content);