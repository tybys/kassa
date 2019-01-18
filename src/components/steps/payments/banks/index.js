import React, {Component} from 'react';
import visa from './BankCard.svg';
import samsung from './SamsungPay.svg';

import _hist from '../../../../_history';

class Banks extends Component {
	triggerPayment= () => {
		this.props.paymentType();

		_hist.push('/index/hash123hash321', {})
	};

	render() {
		return (
			<div>
				<button data-type="visa" onClick={this.triggerPayment}>
					<img src={visa} width='200' alt="v"/>
				</button>

				<button data-type="samsung" onClick={this.triggerPayment}>
					<img src={samsung} width='200' alt="s"/>
				</button>
			</div>
		)
	}
}

export default Banks;