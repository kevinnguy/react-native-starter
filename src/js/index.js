import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import RootNavigator from './config/router';
import store from './config/store';

const mapStateToProps = state => ({ nav: state.nav });
const Navigator = ({ dispatch, nav }) => ( // eslint-disable-line
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const AppWithNavigation = connect(mapStateToProps)(Navigator);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
