import React, { Suspense, lazy } from 'react';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Test = lazy(() => import('./Test'));

const Routes = ({ location }) => {
  const commonPages = ['/logian'];

  return (
    <Suspense fallback={<div />}>
      <Switch location={location}>
        <Redirect from="/" to="/home" exact />
        <Route exact component={Home} path={'/home'} />
        <Route exact component={Test} path={'/home/:id'} />
      </Switch>
    </Suspense>
  );
};
export default withRouter(Routes);
