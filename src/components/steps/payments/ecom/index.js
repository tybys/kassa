import React from 'react';
import yandex from './YandexMoney.svg';
import qiwi from './QiwiWallet.svg';

function Ecom() {
	return (
		<div>
			<a href="true">
				<img src={yandex} width='200' alt="y" />
			</a>

			<a href="true">
				<img src={qiwi} width='200' alt="q" />
			</a>
		</div>
	)
}

export default Ecom;