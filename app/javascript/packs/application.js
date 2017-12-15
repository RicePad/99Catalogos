import React from 'react';
import ReactDOM from 'react-dom';
import PinIndex from '../components/PinIndex';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from '../reducers'

const showComponent = document.querySelector('.pin-index')
const store = createStore(reducers);

// Check to see if redux was set up properly
// console.log('store.getState()', store.getState())


ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/' component={PinIndex} />
		</Switch>
	</BrowserRouter>
</Provider>
, showComponent
	)