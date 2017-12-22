import axios from 'axios';
export const FETCH_PINS = "FETCH_PINS";
export const FETCH_SHOW_PIN = "FETCH_SHOW_PIN";

const ROOT_URL = "http://localhost:5000/api/v1/pins"
// const ROOT_URL = "https://rice-printerest.herokuapp.com/api/v1/pins"



export function fetchPins(){
	const request = axios.get(`${ROOT_URL}`);

	return {
		type: FETCH_PINS,
		payload: request
	}
}


export function showPin(id){
	const request = axios.get(`${ROOT_URL}/${id}`);
	return {
		type: FETCH_SHOW_PIN,
		payload: request
	}
}