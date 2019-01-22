const initialState = {
	number: 1,
	orderAmount: 11
};

export default function step(step = initialState, action) {
	// console.log(action)
	// console.log(step)
	switch (action.type) {
		case 'ADD_STEP_NUMBER':
			const {number} = action;

			return {...step, ...{number: number+1}};

		case 'REMOVE_STEP_NUMBER':
			return initialState;

		case 'GET_MONEY':
			return step.orderAmount;

		default:
			return step;
	}
}