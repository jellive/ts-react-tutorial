import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './AppReducer';
// import Counter from './Counter_Class'
import * as Sentry from '@sentry/browser';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary'

import User from './User'
type UserType = {
  id: number,
  name: string
}
const user: UserType = {
  id: 1,
  name: 'velopert'
}


Sentry.init({dsn: "https://26e6d96d2fa5437198e821d900a4383d@sentry.io/1883592"});

ReactDOM.render(
  // <App />
  // <Counter />
  <ErrorBoundary>
    <User user={user} />
  </ErrorBoundary>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
