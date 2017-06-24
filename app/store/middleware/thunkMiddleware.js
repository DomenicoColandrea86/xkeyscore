import Middleware from './middleware';

const defaultMiddleware = {
  onDispatch: dispatch => (arg1, arg2, arg3) =>
    typeof arg1 === 'string'
      ? dispatch({
          type: arg1,
          payload: arg2,
          ...arg3,
        })
      : dispatch(arg1),
  onGetState: getState => getState,
  onExtraArgument: () => undefined,
};

export default class ThunkMiddleware extends Middleware {
  constructor(middleware = {}) {
    super();
    this.middleware = { ...defaultMiddleware, ...middleware };
  }

  handler({ store, action, next }) {
    if (typeof action === 'function') {
      const { dispatch, getState } = store;
      const { onDispatch, onGetState, onExtraArgument } = this.middleware;
      return action(
        onDispatch(dispatch),
        onGetState(getState),
        onExtraArgument(),
      );
    }

    return next(action);
  }
}
