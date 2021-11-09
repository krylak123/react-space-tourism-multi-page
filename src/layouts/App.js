import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Content from './Content/Content';

const App = () => {
  console.log('work');

  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};

export default App;
