import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './__mocks__/mockedApi'
import createMockedApi from './__mocks__/mockedApi'

if(process.env.REACT_APP_ENVIRONMENT === 'mockedApi') {
    createMockedApi()
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
