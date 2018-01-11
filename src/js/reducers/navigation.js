import { NavigationActions } from 'react-navigation';
import RootNavigator from '../config/router';

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, actions) => {
  const nextState = RootNavigator.router.getStateForAction(actions, state);
  return nextState || state;
};
