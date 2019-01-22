import React, { Component } from 'react';
import style from './style.css';
import FormErrors from '../formErrors';
import ControlError from '../ControlError';

class Cardui extends Component {
	constructor(props) {
		super(props);

		this.state = {
			//_cardnumber: '4276838029755214',
			_cardnumber: '',
			terms: false,
			formErrors: {cardnumber: '', terms: ''},
			cardnumberValid: false,
			termsValid: true,
			formValid: true,
			brand: 'empty'
		}
	}
	handleProcessing = () => {
		this.props.validPay();
	};
	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const node = e.target;

		if (this.state.formValid) {
			this.props.validPay();
		}

		this.setState({
				[name]: value
			}, () => {
			this.validateField(name, value, node);
		});
	};

	// украдено с википедии
	static luhnAlgorithm(digits) {
		let sum = 0;

		for (let i = 0; i < digits.length; i++) {
			let cardNum = parseInt(digits[i]);

			if ((digits.length - i) % 2 === 0) {
				cardNum = cardNum * 2;

				if (cardNum > 9) {
					cardNum = cardNum - 9;
				}
			}

			sum += cardNum;
		}

		return sum % 10 === 0;
	}

	cardbrand(value) {
		fetch(`https://lookup.binlist.net/${value}`)
		// нет я не забыл тут стрелочную функию, через стрелочную ниже показан хипсто-выход из ситуации применения контекста ;)
			.then(function (response) {
				return response.json()
			})
			.then((data) => {
				let brand = data.bank.name !== undefined ? data.bank.name.toLowerCase() : '';

				// красота кода не главное
				switch (true) {
					case /sber/.test(brand):
						this.setState({
							brand: 'sber'
						});
						break;

					case /alfa/.test(brand):
						this.setState({
							brand: 'alfa'
						});
						break;

					case /tinkoff/.test(brand):
						this.setState({
							brand: 'tink'
						});
						break;
					// типо открытие, апиха не читает хипсто-банки
					case /' '/.test(brand):
						this.setState({
							brand: 'otkr'
						});
						break;

					default:
						this.setState({
							brand: 'empty'
						});
						break;
				}
			});
	}

	validateField(fieldName, value, tag) {
		let fieldValidationErrors = this.state.formErrors;

		switch(fieldName) {
			case '_cardnumber':
				var regExpCard = /^[0-9][0-9- ]*$/i;
				var chars = value.length;

				//this.setState({
					//cardnumber:value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
				//});

				if (chars === 0) {
					tag.classList.remove('error');

					this.setState({
						brand: 'empty'
					});
				}

				if (chars === 6) {
					this.cardbrand(value);
				}

				if (!this.constructor.luhnAlgorithm(value)) {
					fieldValidationErrors.cardnumber = 'is invalid';
					tag.classList.add('error');
				} else {
					fieldValidationErrors.cardnumber = '';
					tag.classList.remove('error');
					this.setState({
						cardnumberValid: true
					})
				}
				break;

			case 'terms':
				this.setState({
					terms: !this.state.terms,//!this.state.terms ? true : false
					termsValid: !this.state.termsValid
				});
				break;

			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			// cardnumberValid: true,
			// termsValid: true
		}, this.validateForm);
	}

	validateForm() {
		this.setState({
			formValid: this.state.cardnumberValid && this.state.termsValid
		});

		//console.log(this.state)
	}

	render() {
		return (
			<div>
				{/*<FormErrors formErrors={this.state.formErrors}/>*/}

				<div className="cardwrap">
					<form action="">
						<div className="cardfront">

							<label htmlFor="">
								Номер карты
								<ControlError controlError={this.state.formErrors.cardnumber} />
							</label>

							<input maxLength={18} name="_cardnumber" type="text" onChange={this.handleUserInput} value={this.state._cardnumber} placeholder="0000 0000 0000 0000" />
							{/*пришлось сделать через фоновую пикчу, можно было бы как у тинькофф но мне было влом*/}
							<span className={"brand "+this.state.brand}></span>

							<label htmlFor="">Действительна до</label>
							<select disabled="disabled" autoComplete="cc-exp-month" id="SMonth" name="ExpMonth" className="selectBox" defaultValue="01">
								<option value="01">01</option>
							</select>

							<select disabled="disabled" autoComplete="cc-exp-year" id="SYear" name="ExpYear" className="selectBox" defaultValue="2019">
								<option value="2019">2019</option>
							</select>
						</div>
						<div className="cardback">
							<label htmlFor="">CVC/CVV</label>
							<input disabled="disabled" name="ccv" type="text" onChange={this.handleUserInput} value={this.state.ccv}/>
						</div>
						<div className="userinfo">
							<label htmlFor="">Email</label>
							<input disabled="disabled" name="email" type="text" onChange={this.handleUserInput} value={this.state.email} />
							<p>На этот email мы пришлем вам информацию о счете</p>
							<button disabled={!this.state.formValid} onClick={this.handleProcessing}>Оплатить</button>
						</div>
						<div>
							<label className="terms" htmlFor="terms">
								<input name="terms" id="terms" type="checkbox" onChange={this.handleUserInput} defaultChecked={this.state.terms} />
								Заявление-Распоряжение Плательщика
							</label>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Cardui;