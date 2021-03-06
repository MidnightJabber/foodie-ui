import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'components/Dashboard/Dashboard';
import Landing from 'components/Landing/Landing';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Landing} />
    </Switch>
  </div>
);

export default App;
