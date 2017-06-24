import Middleware from './middleware';

export default class AnalyticsMiddleware extends Middleware {
  constructor(tracker) {
    super();
    this.tracker = tracker;
  }

  handler({ action, next }) {
    if (this.tracker) {
      this.tracker(action);
    }

    return next(action);
  }
}
