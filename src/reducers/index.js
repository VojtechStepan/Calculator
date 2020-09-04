import percentReducer from './percent';
import amountReducer from './amount';
import periodReducer from './period';
import optionReducer from './option';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	amountReducer,
	periodReducer,
	percentReducer,
	optionReducer,
});

export default reducers;