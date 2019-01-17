import React, { Component } from 'react';
// import style from './style.css';

class Cardui extends Component {
	handleProcessing = () => {
		this.props.validPay()
	};

	render() {

		return (
			<div>
				<div className="cardwrap">
					<div className="cardfront">
						<label htmlFor="">Номер карты</label>
						<input type="text"/>

						<label htmlFor="">Действительна до</label>
						<select autoComplete="cc-exp-month" id="SMonth" name="ExpMonth" className="selectBox" defaultValue="01">
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

						<select autoComplete="cc-exp-year" id="SYear" name="ExpYear" className="selectBox" defaultValue="2019">
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
						<input type="text"/>
					</div>
					<div className="userinfo">
						<label htmlFor="">Email</label>
						<input type="text" />
						<p>На этот email мы пришлем вам информацию о счете</p>
						<button onClick={this.handleProcessing}>Оплатить</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Cardui;