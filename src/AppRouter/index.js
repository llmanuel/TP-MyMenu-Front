import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import DashboardPage from '../components/Dashboard/DashboardPage';
import Main from '../components/Main'
import NotFound from '../components/NotFound';
import NavBar from '../components/NavBar';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
