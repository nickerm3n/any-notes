import React from 'react';
import { Switch } from 'react-router-dom';
import { BaseLayout } from './layouts/BaseLayout';
import { Notes, Archive, Trash, Settings } from './pages';
import { CustomRoute } from './routes/CustomRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Notes} layout={BaseLayout} />
      <CustomRoute path="/archive" exact component={Archive} layout={BaseLayout} />
      <CustomRoute path="/trash" exact component={Trash} layout={BaseLayout} />
      <CustomRoute path="/settings" exact component={Settings} layout={BaseLayout} />
    </Switch>
  );
};

export default Routes;
