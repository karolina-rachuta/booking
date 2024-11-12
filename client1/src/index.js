import React from 'react';
import ReactDOM from 'react-dom/client';
import {SearchContextProvider} from '../src/context/SearchContext';
import {AuthContextProvider} from '../src/context/AuthContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
