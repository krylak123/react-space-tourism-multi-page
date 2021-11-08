import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Content from './Content/Content';

const App = () => {
  console.log('work');

  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;
