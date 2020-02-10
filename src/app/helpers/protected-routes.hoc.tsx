import * as React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {Text} from 'react-native';

import {AppProps} from './dependencies.props';
import DependencyInjector from './dependency.hoc';

interface PrivateRouteProps extends AppProps {
  component: typeof React.Component;
}

class PrivateRoute extends React.Component<PrivateRouteProps, {loading: boolean; isAuthenticated: boolean}> {
  state = {
    loading: true,
    isAuthenticated: false,
  }
  async componentDidMount(): Promise<void> {
    const isAuthenticated = await this.props.authService.isLoggedIn();
    this.setState({
      loading: false,
      isAuthenticated,
    });
  }

  render(): React.ReactNode {
    const {component: Component, ...rest} = this.props;
    if (this.state.loading) {
      return <Text>LOADING</Text>;
    }
    return (
      <Route {...rest} render={(props): JSX.Element => (
        <>
          {!this.state.isAuthenticated && <Redirect to={{pathname: '/', state: {from: props.location}}} />}
          <Component {...props} />
        </>
      )}
      />
    )
  }
}

export default DependencyInjector(PrivateRoute);
