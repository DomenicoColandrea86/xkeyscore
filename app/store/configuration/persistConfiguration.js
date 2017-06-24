import { AsyncStorage } from 'react-native';
import { autoRehydrate, createTransform } from 'redux-persist-immutable';
import createMigration from 'redux-persist-migrate';

const MIGRATION_ID = 'migration';
const manifest = {
  1: state => state,
};

const runningTransform = createTransform(
  inboundState => inboundState,
  outboundState => {
    const newState = outboundState;
    if (newState.get('running')) {
      newState.set('running', false);
    }

    return newState;
  },
);

export default class PersistConfiguration {
  constructor() {
    this.backlist = [];
    this.transform = [runningTransform];
  }

  addTransform(transform) {
    this.transform.push(transform);
  }

  addBlacklist(id) {
    this.backlist.push(id);
  }

  getConfiguration() {
    return {
      storage: AsyncStorage,
      blacklist: this.backlist,
      transforms: this.transform,
    };
  }

  getMigrationEnhancer() {
    return createMigration(manifest, MIGRATION_ID);
  }

  getRehydrateEnhancer() {
    return autoRehydrate();
  }
}
