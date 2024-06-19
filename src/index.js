import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page1 from './App/Page1';
import reportWebVitals from './reportWebVitals';
import Page2 from './App/Page2';
import Page3 from './App/Page3';
import Page4 from './App/Page4';
import Page5 from './App/Page5';
import Page6 from './App/Page6';
import Page7 from './App/Page7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
