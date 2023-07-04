import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@szhsin/react-menu/dist/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';
import { LoginContextProvider } from './Context/LoginContext';
import { UserContextProvider } from './Context/UserContext';
import { FeedContextProvider } from './Context/FeedContext';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LoginContextProvider>
        <UserContextProvider>
          <FeedContextProvider>
            <App />
          </FeedContextProvider>
        </UserContextProvider>
      </LoginContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
