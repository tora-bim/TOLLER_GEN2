import React from 'react';
import './assets/css/reset.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './Header.jsx';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header className="header" />
    <App />
  </React.StrictMode>,
)
