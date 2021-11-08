import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';

const App = () => {
  console.log('work');

  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;
