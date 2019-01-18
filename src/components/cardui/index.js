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
			ccv: '',
			email: '',
			formErrors: {cardnumber: '', expday: '', expyear: '', ccv: '', email: ''},
			cardnumberValid: false,
			expdayValid: false,
			expyearValid: false,
			ccvValid: false,
			emailValid: false,
			formValid: false
		}
	}
	handleProcessing = () => {
		this.props.validPay();
	};
	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({[name]: value},
			() => { this.validateField(name, value) });
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch(fieldName) {
			case 'cardnumber':

				break;

			case 'expday':

				break;

			case 'expyear':

				break;
			case 'ccv':

				break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				break;

			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '': ' is too short';
				break;

			default:
				break;
		}
		this.setState({formErrors: fieldValidationErrors,
			emailValid: emailValid,
			passwordValid: passwordValid
		}, this.validateForm);
	}
	validateForm() {
		this.setState({formValid: this.state.emailValid &&
				this.state.passwordValid});
	}

	render() {

		return (
			<div>
				<FormErrors formErrors={this.state.formErrors}/>

				<div className="cardwrap">
					<form action="">
						<div className="cardfront">
							<label htmlFor="">Номер карты</label>
							<input name="cardnumber" type="text" onChange={this.handleUserInput} value={this.state.cardnumber} placeholder="0000 0000 0000 0000" />

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
							<input name="ccv" type="text" onChange={this.handleUserInput} value={this.state.ccv}/>
						</div>
						<div className="userinfo">
							<label htmlFor="">Email</label>
							<input name="email" type="text" onChange={this.handleUserInput} value={this.state.email} />
							<p>На этот email мы пришлем вам информацию о счете</p>
							<button onClick={this.handleProcessing}>Оплатить</button>
						</div>
						<div>
							<input type="checkbox"/>
							<label htmlFor="">Заявление-Распоряжение Плательщика</label>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Cardui;