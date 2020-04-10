import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { throttle } from 'lodash';

import store from 'store/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { saveState } from 'store/localStorage';

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
