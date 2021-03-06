import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/main.scss';

import './mocks/labs';
import './mocks/blogs';
import './mocks/blogTags';
import './mocks/blogArticle';
import './mocks/friendship';
import './mocks/githubInfo';
import './mocks/comment';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
