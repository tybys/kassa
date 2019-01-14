import React, {Component} from 'react';
import visa from './BankCard.svg';
import samsung from './SamsungPay.svg';

import {createStore} from 'redux';
import reducer from "../../../../reducers";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import stepAction, {nextStep} from '../../../../actions/step';

const store = createStore(reducer);

let handlePayment = (e) => {
	e.preventDefault();

	store.dispatch({
		type: 'CHOOSED_PAYMENT',
		payment_type: e.target.parentElement.dataset.type,
		step: 2
	});
	// console.log(store.getState().step.step)
};

class Banks extends Component {
	render() {
		console.log(this.props)
		// debugger
		return (
			<div>
				<a href="#" data-type="visa" onClick={handlePayment}>
					<img src={visa} width='200'/>
				</a>

				<a href="#" data-type="samsung" onClick={handlePayment}>
					<img src={samsung} width='200'/>
				</a>
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

export default connect(mapStateToProps, mapDispatchesToProps)(Banks);
//export default Banks;