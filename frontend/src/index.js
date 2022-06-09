import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import About from "./About";
import Future from "./Future";
import Mint from "./Mint";
import Team from "./Team";

const serverURL = "https://8y3xnklzww8m.usemoralis.com:2053/server";
const appID = "dEKrdW2zhrFqvyg8sKslIGB3OP1yVxYlMCdhgrWf";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverURL} appId={appID}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}>            
            <Route index element={<About />} />
            <Route path="about" element={<About/>} />
            <Route path="future" element={<Future/>} />
            <Route path="mint" element={<Mint/>} />
            <Route path="team" element={<Team/>} />            
          </Route>
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
