// @flow

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Example from './index';

it('renders correctly', () => {
  renderer.create(<Example />);
});
