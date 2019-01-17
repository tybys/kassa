export const nextStep = (number) => ({
	type: 'ADD_STEP_NUMBER',
	number: number
});

export const prevStep = () => ({
	type: 'REMOVE_STEP_NUMBER'
});

export const getMoney = () => ({
	type: 'GET_MONEY'
});