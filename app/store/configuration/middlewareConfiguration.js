import { createLogger } from 'redux-logger';
import AnalyticsMiddleware from '../middleware/analyticsMiddleware';
import ArrayMiddleware from '../middleware/arrayMiddleware';
import PromiseMiddleware from '../middleware/promiseMiddleware';
import ThunkMiddleware from '../middleware/thunkMiddleware';

export default class MiddlewareConfiguration {
  constructor() {
    const arrayMiddleware = new ArrayMiddleware();
    const promiseMiddleware = new PromiseMiddleware();
    const thunkMiddleware = new ThunkMiddleware();
    const analyticsMiddleware = new AnalyticsMiddleware();

    this.middleware = [];
    this.middleware.push(arrayMiddleware.create());
    this.middleware.push(promiseMiddleware.create());
    this.middleware.push(thunkMiddleware.create());
    this.middleware.push(analyticsMiddleware.create());

    if (__DEV__) {
      const loggerMiddleware = this.createLoggerMiddleware();
      this.middleware.push(loggerMiddleware);
    }
  }

  createLoggerMiddleware() {
    return createLogger({
      collapsed: true,
      duration: true,
      timestamp: true,
      diff: true,
      logErrors: true,
    });
  }

  addMiddleware(middleware) {
    this.middleware.push(middleware);
  }

  getMiddleware() {
    return this.middleware;
  }
}
