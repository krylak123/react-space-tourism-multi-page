import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from '../../pages/Home/Home';

const Content = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/destination" exact render={() => <p>destination</p>} />
    <Route path="/crew" exact render={() => <p>crew</p>} />
    <Route path="/technology" exact render={() => <p>technology</p>} />
    <Redirect to="/" />
  </Switch>
);

export default Content;
