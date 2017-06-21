import { fromJS } from 'immutable';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

const initialState = fromJS({
  drawerState: 'closed',
  drawerDisabled: true,
});

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return state.set('drawerState', action.payload);

    case CLOSE_DRAWER:
      return state.set('drawerState', action.payload);

    default:
      return state;
  }
}
