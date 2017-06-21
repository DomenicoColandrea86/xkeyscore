import { UIManager, NativeModules } from 'react-native';

// This file should be run first, and allows us to specify some global variables.
// eslint-disable-next-line no-underscore-dangle
global.__TESTENV__ = false;

// eslint-disable-next-line no-underscore-dangle
global.__DEBUGGING_REMOTELY__ = !!(global.location && global.location.href);

global.UIManager = UIManager;
global.NativeModules = NativeModules;
