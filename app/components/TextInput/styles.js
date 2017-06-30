import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20,
  },
  valid: {
    borderColor: 'rgba(0, 0, 0, 0.4)',
    // borderColor: '#53E69D',
  },
  invalid: {
    borderColor: 'rgba(0, 0, 0, 0.4)',
    // borderColor: '#F55E64',
  },
});
