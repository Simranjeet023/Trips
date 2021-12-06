import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore({});

/*const onRedirectCallback = appStore => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl
    : window.location.pathname
  );
};*/

ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  ,
  rootElement);

registerServiceWorker();

