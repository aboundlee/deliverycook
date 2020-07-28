import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


import React from 'react';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Components/Store';

import  { render } from "react-dom";

const rootElement = document.getElementById("root");

	render(
	  <Provider store={store}>
	  
	    <App />
	    </Provider>
	  ,rootElement
	);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
