import {combineReducers} from 'redux';
import step from './step';
import payment from './payment';

const rootReducer = combineReducers({
	step
	// ,payment
});

export default rootReducer;