import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import mainReducer from './Redux/mainReducer';
import {Provider} from 'react-redux';

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
