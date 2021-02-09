import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import 'materialize-css/dist/css/materialize.min.css'



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
