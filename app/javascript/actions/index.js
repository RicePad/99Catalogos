import axios from 'axios';
export const FETCH_PINS = "FETCH_PINS";

// const ROOT_URL = "http://localhost:5000/api/v1/pins"
const ROOT_URL = "https://rice-printerest.herokuapp.com/api/v1/pins.json"



export function fetchPins(){
	const request = axios.get(`${ROOT_URL}`);

	return {
		type: FETCH_PINS,
		payload: request
	}
}