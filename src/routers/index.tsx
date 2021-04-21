import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { path } from './path';
import { About, E404, Exchange, Home } from '../pages/index';

const IndexRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path={path.about}>
        <About />
      </Route>
      <Route exact path={path.e404}>
        <E404 />
      </Route>
      <Route exact path={path.exchange}>
        <Exchange />
      </Route>
      <Route exact path={path.home}>
        <Home />
      </Route>
      <Route path={path.placeholder}>
        <Redirect to={{ pathname: path.e404 }} />
      </Route>
    </Switch>
  );
};

export default IndexRouter;
