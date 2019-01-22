import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {nextStep, prevStep} from "../actions/step";

import ChoosePayment from '../components/steps/ChoosePayment';
import Charge from '../components/steps/Charge';
import Processing from '../components/Processing';
import Success from '../components/Success';

import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
/*const styles = {
	wrapper: {
		width: 900,
		marginTop: 75,
		marginLeft: 'auto',
		marginRight: 'auto',
		boxShadow: '0 0 8px rgba(0,0,0,.5)'
	}
};*/
//const { classes } = jss.createStyleSheet(styles).attach();

class Content extends Component {
	handleAddStep = (dataFromChild) => {
		const {number} = this.props.stepProp;
		const {nextStepProp} = this.props;

		nextStepProp(number);
		console.log('some')
	};

	handleResetStep = () => {
		const {prevStepProp} = this.props;

		prevStepProp();
	};

	step() {
		switch (this.props.stepProp.number) {
			case 1:
				return <ChoosePayment onComplete={this.handleAddStep} />;
			case 2:
				return <Charge onInit={this.handleAddStep} order={this.props.stepProp.orderAmount} />;
			case 3:
				return <Processing onReady={this.handleAddStep}/>;

			case 4:
				return <Success/>;

			default:
				return <ChoosePayment onComplete={this.handleAddStep} />
		}
	}
	render() {
		console.log(this.props.stepProp)
		return (
			<div>
				{/*<button onClick={this.handleResetStep}>back</button>*/}
				{this.step()}
			</div>
		)
	}
}

const getProps = (state) => ({
	stepProp: state.step
});

const setActions = (dispatch) => bindActionCreators({
	nextStepProp: nextStep,
	prevStepProp: prevStep
}, dispatch);
/*
functon() {
	return dispatch(apply.this.call())
}
 */

export default connect(getProps, setActions)(Content);