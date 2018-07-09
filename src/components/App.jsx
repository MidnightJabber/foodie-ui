import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'components/Dashboard/Dashboard';
import Landing from 'components/Landing/Landing';
import Recipe from 'components/Recipe/Recipe';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recipe/:id" component={Recipe} />
      <Route path="/" component={Landing} />
    </Switch>
  </div>
);

export default App;
