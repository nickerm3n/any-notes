import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

type Props = {
  component: React.FC<any>;
  layout: React.FC<any>;
} & RouteProps;

export const CustomRoute: React.FC<Props> = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
