import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AuthContextProvider from './components/context/Auth-Context';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

