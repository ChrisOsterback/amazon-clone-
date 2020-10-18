import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./redux/reducer";
import { StateProvider } from "./redux/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
