import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from '../../pages/Home/Home';
import Destination from '../../pages/Destination/Destination';
import Crew from '../../pages/Crew/Crew';
import Technology from '../../pages/Technology/Technology';

const Content = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/destination/:planet" exact render={props => <Destination planet={props} />} />
    <Route path="/crew" exact render={() => <Crew />} />
    <Route path="/technology" exact render={() => <Technology />} />
    <Redirect to="/" />
  </Switch>
);

export default Content;
