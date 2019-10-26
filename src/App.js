import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './page/Homepage';

import './App.css';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage } />
    </div>
  );
};

export default App;
