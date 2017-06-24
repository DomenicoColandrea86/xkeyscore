import Middleware from './middleware';

export default class PromiseMiddleware extends Middleware {
  constructor(errorHandler) {
    super();
    this.errorHandler = errorHandler;
  }

  warn(error) {
    if (this.errorHandler) {
      this.errorHandler(error);
    } else {
      throw error;
    }
  }

  isPromise(object) {
    return (
      typeof object.then === 'function' && typeof object.catch === 'function'
    );
  }

  handler({ action, next }) {
    return this.isPromise(action)
      ? Promise.resolve(action).then(next, this.warn)
      : next(action);
  }
}
