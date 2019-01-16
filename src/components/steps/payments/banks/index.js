import React, {Component} from 'react';
import visa from './BankCard.svg';
import samsung from './SamsungPay.svg';

class Banks extends Component {
	someFn = () => {
		this.props.callbackFromMiddle();
	};

	render() {
		return (
			<div>
				<a href="#" data-type="visa" onClick={this.someFn}>
					<img src={visa} width='200'/>
				</a>

				<a href="#" data-type="samsung">
					<img src={samsung} width='200'/>
				</a>
			</div>
		)
	}
}

export default Banks;