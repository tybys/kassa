import hash from '../helper';

const initialState = [{
	step: 2,
	orderAmount: 11
}];

export default function step(state = initialState, action) {
	switch (action.type) {
		case 'CHOOSED_PAYMENT':
			return [
				...state
			];

		default:
			return state;
	}
}