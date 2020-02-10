import {AppRegistry, Platform} from 'react-native';

import {AppComponent} from './app/components';
const appName = 'example';

AppRegistry.registerComponent(appName, (): typeof AppComponent => AppComponent);
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root')
  });
}

export default AppComponent;