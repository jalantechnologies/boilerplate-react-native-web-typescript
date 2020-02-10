
import * as React from 'react';
import {View, Text, Image, Platform} from 'react-native';

import {UsersComponent, HomeComponent} from '..';
import PrivateRoute from '../../helpers/protected-routes.hoc';

import {Router, Route, Link, Switch} from '../../helpers/router';


import styles from './app.styles';

const WebFont = (): JSX.Element => {
  return (
    <style type="text/css">{`
    @font-face {
      font-family: 'MaterialIcons';
      src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
    }

    @font-face {
      font-family: 'FontAwesome';
      src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
    }
  `}</style>
  );
}

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        {
          Platform.OS === 'web' && <WebFont/>
        }
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Router>
            <View>
              <Link to="/"><Text>Home</Text></Link>
              <Link to="/users"><Text>Users</Text></Link>
            </View>
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <PrivateRoute exact path="/users" component={UsersComponent} />
            </Switch>
          </Router>
        </View>
      </>
    );
  }
}

export default App;
