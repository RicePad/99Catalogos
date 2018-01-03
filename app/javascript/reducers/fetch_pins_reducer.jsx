import { FETCH_PINS, FETCH_SHOW_PIN } from '../actions'
import _ from 'lodash';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_PINS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_SHOW_PIN: 
			return {...state, [action.payload.data.id]: action.payload.data}

		default:
			return state;
	}
}