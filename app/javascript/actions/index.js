import axios from 'axios';
export const FETCH_PINS = "FETCH_PINS";

const ROOT_URL = "http://localhost:5000/api/v1/pins"

export function fetchPins(){
	const request = axios.get(`${ROOT_URL}`);

	return {
		type: FETCH_PINS,
		payload: request
	}
}