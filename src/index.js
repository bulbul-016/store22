import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './scss/app.scss';
import ourstore from './redux/ourstore';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ourstore}>
    <App />
    </Provider>
    
  </React.StrictMode>,
);
