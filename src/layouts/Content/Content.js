import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from '../../pages/Home/Home';
import Destination from '../../pages/Destination/Destination';

const Content = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/destination/:planet" exact render={props => <Destination planet={props} />} />
    <Route path="/crew" exact render={() => <p>crew</p>} />
    <Route path="/technology" exact render={() => <p>technology</p>} />
    <Redirect to="/" />
  </Switch>
);

export default Content;
