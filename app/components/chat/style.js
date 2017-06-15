import { Platform, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

// 592, 360
const styles = {
  container: {
    backgroundColor: '#FFF',
    marginTop: 1,
  },
  screenView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 2.4,
    width: width / 1.5,
  },
  matches: {
    fontSize: 23,
    color: 'rgba(0, 0, 0, 0.2)',
    // fontFamily: 'Nunito-Light'
  },
  matchesModified: {
    fontSize: 23,
    color: 'rgba(0, 0, 0, 0.2)',
  },
  imageText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: (Platform.OS === 'ios') ? 50 : 0,
    marginTop: (Platform.OS === 'ios') ? 0 : 50,
  },
  matchesText: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  switchBlockHeader2: {
    alignSelf: 'center',
    fontSize: 26,
    paddingRight: 20,
    color: 'white',
  },
  menSwitch: {
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 7,
    height: 50,
    backgroundColor: 'rgba(255, 80, 80, 1)',
  },
  switch1: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'white',
  },
};

export default styles;
