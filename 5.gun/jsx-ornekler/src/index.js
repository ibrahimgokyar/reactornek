import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Basit from './components/Basit';
import UserOrnek from './components/UserOrnek';
import InlineCss from './components/InlineCss';
import RenderOrnek from './components/RenderOrnek';
import ButtonClick from './components/ButtonClick';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonClick />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
