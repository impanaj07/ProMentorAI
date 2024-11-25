import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct module for React 18
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


