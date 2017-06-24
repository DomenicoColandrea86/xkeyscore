import Middleware from './middleware';

export default class ArrayMiddleware extends Middleware {
  handler({ action, next }) {
    return Array.isArray(action) ? action.map(next) : next(action);
  }
}
