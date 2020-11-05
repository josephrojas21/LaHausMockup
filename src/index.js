import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/index.styles'
import 'antd/dist/antd.css';
import App from './App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
