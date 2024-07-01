// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você deseja medir o desempenho do seu aplicativo, você pode passar uma função
// para logar resultados (por exemplo: reportWebVitals(console.log))
// ou enviar para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
