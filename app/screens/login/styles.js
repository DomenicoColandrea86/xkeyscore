import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = {
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    top: height / 2.2,
  },
  loginBackgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  loginFooter: {
    marginHorizontal: 30,
    bottom: 10,
  },
  loginFooterText: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 12,
    textAlign: 'center',
  },
};

export default styles;
