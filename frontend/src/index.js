import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {SearchContextProvider} from './context/SearchContext.js'

import {AuthContextProvider} from './context/AuthContext.js'

import {AdminContextProvider} from './context/AdminContext.js'



ReactDOM.render(
  <React.StrictMode>

<AdminContextProvider>
  <AuthContextProvider>
     <SearchContextProvider>
       <App />
      </SearchContextProvider>
   </AuthContextProvider>
 </AdminContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
