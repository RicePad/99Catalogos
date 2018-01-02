import React from 'react';
import ReactDOM from 'react-dom';
import AddPinButton from '../components/AddPinButton';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';


const showComponent = document.querySelector('.create-button')
const store = applyMiddleware(promise)(createStore);



ReactDOM.render(
	<Provider store={store(reducers)}>
		<AddPinButton />
	</Provider>, showComponent
	)