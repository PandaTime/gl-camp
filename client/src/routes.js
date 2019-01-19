import React from 'react';
import { Route, Switch } from "react-router-dom";
import MoviesDashboardLazy from './screens/MoviesDashboard';
import MoviesListLazy from './screens/MoviesList';
import MovieEditLazy from './screens/MovieEdit/';

/**
 * Used only for SSR by next.js => next.js currently don't support page with Suspense(https://reactjs.org/docs/code-splitting.html#reactlazy) 
 * for initial page and we're trying to trick him(load not <Suspense> element initially and reuse it after)
 * @param {*} serverComponent - object that we get on SSR from next.js
 * @param {*} props - component props from Router
 */
function withServerSuspense(serverComponent, props) {
  const regexp = new RegExp(`^${serverComponent.matchPath}$`);
  return function(WrapperComponent) {
    if (regexp.exec(props.match.path) && serverComponent.component) {
      return (<serverComponent.component {...props} />);
    }
    return (<WrapperComponent {...props} />);
  }
}

const AppRouting = (routerProps) => {
  const { serverComponent } = routerProps;
  return (
  <div className="app-content-wrapper">
    <Switch>
      <Route path="/list" exact render={(props) => withServerSuspense(serverComponent, props)(MoviesListLazy)} />
      <Route path="/dashboard" exact render={(props) => withServerSuspense(serverComponent, props)(MoviesDashboardLazy)} />
      <Route path="/edit/:id" exact render={(props) => withServerSuspense(serverComponent, props)(MovieEditLazy)} />
      <Route render = {(props) => withServerSuspense(serverComponent, props)(MoviesListLazy)} />
    </Switch>
  </div>
)}

export default AppRouting;
