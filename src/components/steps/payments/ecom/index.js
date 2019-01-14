import React, { Component } from 'react';
import yandex from './YandexMoney.svg';
import qiwi from './QiwiWallet.svg';

function Ecom() {
	return (
		<div>
			<a href="#">
				<img src={yandex} width='200' />
			</a>

			<a href="#">
				<img src={qiwi} width='200' />
			</a>
		</div>
	)
}

export default Ecom;