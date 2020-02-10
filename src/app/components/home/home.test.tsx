import 'react-native';
import React from 'react';

import HomeComponent from './home.component';
import renderer from 'react-test-renderer';

describe('HomeComponent', (): void => {
  it('should render', (): void => {
    renderer.create(<HomeComponent />);
  });
});
