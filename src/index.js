// Set up your application entry point here...
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import routes from './routes';

import {loadLabtests} from './actions/labtestActions';
import {loadDiagnosticCenters} from './actions/diagnosticcenterActions';
import {loadHomeremedies} from './actions/homeremediesActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/css/bootstrap.min.css';
// import '../node_modules/css/animate.min.css';
// import '../node_modules/css/light-bootstrap-dashboard.min.css';
// import '../node_modules/css/demo.css';

import '../node_modules/toastr/build/toastr.min.css';
import './favicon.ico';





    // <!-- Bootstrap core CSS     -->
    // <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

    // <!-- Animation library for notifications   -->
    // <link href="assets/css/animate.min.css" rel="stylesheet"/>

    // <!--  Light Bootstrap Table core CSS    -->
    // <link href="assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/>


    // <!--  CSS for Demo Purpose, don't include it in your project     -->
    // <link href="assets/css/demo.css" rel="stylesheet" />

const store = configureStore();


store.dispatch(loadLabtests());
store.dispatch(loadDiagnosticCenters());
store.dispatch(loadHomeremedies());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
