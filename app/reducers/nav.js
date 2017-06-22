import { AppNavigator } from '../routes';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Index'),
);

const navReducer = (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state) || state;
};

export default navReducer;
