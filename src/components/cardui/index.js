import React, { Component } from 'react';
import style from './style.css';
import FormErrors from '../formErrors';

class Cardui extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cardnumber: '',
			expday: '',
			expyear: '',
			terms: false,
			formErrors: {cardnumber: '', terms: ''},
			cardnumberValid: false,
			termsValid: false,
			formValid: false,
			brand: 'empty'
		}
	}
	handleProcessing = () => {
		// this.props.validPay();
	};
	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const node = e.target;

		this.setState({
				[name]: value
			}, () => { this.validateField(name, value, node) });
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
			case 'cardnumber':
				var regExpCard = /^[0-9][0-9- ]*$/i;
				var chars = value.length;

				this.setState({
					//cardnumber:value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
				});

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
				}
				break;

			case 'terms':
				this.setState({
					terms: !this.state.terms//!this.state.terms ? true : false
				});
				break;

			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			cardnumberValid: true,
			termsValid: true

		}, this.validateForm);
	}

	validateForm() {
		this.setState({
			formValid: this.state.cardnumberValid && this.state.termsValid
		});

		console.log(this.state)
	}

	render() {
		// const formValid = this.state.formValid ? '' : 'disabled';

		return (
			<div>
				<FormErrors formErrors={this.state.formErrors}/>

				<div className="cardwrap">
					<form action="">
						<div className="cardfront">
							<label htmlFor="">Номер карты</label>
							<input maxLength={18} name="cardnumber" type="text" onChange={this.handleUserInput} value={this.state.cardnumber} placeholder="0000 0000 0000 0000" />
							{/*пришлось сделать через фоновую пикчу, можно было бы как у тинькофф но мне было влом*/}
							<span className={"brand "+this.state.brand}></span>

							<label htmlFor="">Действительна до</label>
							<select autoComplete="cc-exp-month" onChange={this.handleUserInput} id="SMonth" name="ExpMonth" className="selectBox" defaultValue="01">
								<option value="01">01</option>
								<option value="02">02</option>
								<option value="03">03</option>
								<option value="04">04</option>
								<option value="05">05</option>
								<option value="06">06</option>
								<option value="07">07</option>
								<option value="08">08</option>
								<option value="09">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>

							<select autoComplete="cc-exp-year" onChange={this.handleUserInput} id="SYear" name="ExpYear" className="selectBox" defaultValue="2019">
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
								<option value="2028">2028</option>
								<option value="2029">2029</option>
								<option value="2030">2030</option>
								<option value="2031">2031</option>
								<option value="2032">2032</option>
								<option value="2033">2033</option>
								<option value="2034">2034</option>
								<option value="2035">2035</option>
								<option value="2036">2036</option>
								<option value="2037">2037</option>
								<option value="2038">2038</option>
								<option value="2039">2039</option>
								<option value="2040">2040</option>
								<option value="2041">2041</option>
								<option value="2042">2042</option>
								<option value="2043">2043</option>
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
								<input id="terms" type="checkbox" onChange={this.handleUserInput} defaultChecked={this.state.terms} />
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