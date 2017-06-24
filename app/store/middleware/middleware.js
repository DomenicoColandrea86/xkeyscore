export default class Middleware {
  create() {
    return store => next => action => this.handler({ store, next, action });
  }

  handler({ action, next }) {
    next(action);
  }
}
