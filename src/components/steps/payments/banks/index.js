import React, { Component } from 'react';
import visa from './BankCard.svg';
import samsung from './SamsungPay.svg';

function Banks() {
	return (
		<div>
			<a href="#">
				<img src={visa} width='200' />
			</a>

			<a href="#">
				<img src={samsung} width='200' />
			</a>
		</div>
	)
}

export default Banks;