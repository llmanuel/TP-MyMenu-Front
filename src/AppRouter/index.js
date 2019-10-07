import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import DashboardPage from '../components/Dashboard/DashboardPage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route path="/" component={DashboardPage} exact={true} /> */}
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
