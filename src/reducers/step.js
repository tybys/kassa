import hash from '../helper';

const initialState = {
	number: 1,
	orderAmount: 11
};

export default function step(state = initialState, action) {
	switch (action.type) {
		case 'CHOOSED_PAYMENT':
			return {...state, ...{step: (action.number)}};
		default:
			return state;
	}
}