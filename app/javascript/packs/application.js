import React from 'react';
import ReactDOM from 'react-dom';
import GigIndex from '../components/GigIndex';
import { BrowserRouter, Router, Route, Switch } from 'react-router';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from '../reducers'

const showComponent = document.querySelector('.pin-index')

ReactDOM.render(
	<GigIndex />, showComponent
	)