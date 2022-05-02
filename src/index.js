import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/userContext/UserContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
