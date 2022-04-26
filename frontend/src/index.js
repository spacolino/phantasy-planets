import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const serverURL = "https://rhpvmb8wflbb.usemoralis.com:2053/server";
const appID = "19hlAwhbmDvTRXjNEzkU9TePw7jDFKPfOusRul0p";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverURL} appId={appID}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
