import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App/components/App';
import { Provider } from 'react-redux';
import configStore from './store';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

const history = createBrowserHistory();
const  store  = configStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App store={store}/>
      </ConnectedRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
