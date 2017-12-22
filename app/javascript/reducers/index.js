import { combineReducers } from 'redux';
import fetchPins from './fetch_pins_reducer';


export default combineReducers({
	pins: fetchPins
})