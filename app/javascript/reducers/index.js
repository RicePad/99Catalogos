import { combineReducers } from 'redux';
import fetchPins from './fetch_pins_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	pins: fetchPins,
	form: formReducer
})