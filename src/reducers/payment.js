const initialState = {
	step: 1,
	orderAmount: 11
};

export default function step(state = initialState, action) {
	switch (action.type) {
		case 'CHOOSED_PAYMENT':
			// debugger
		return {...state, ...{step: (action.step)}}

	default:
		return state;
	}
}