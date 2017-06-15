import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

// 592, 360
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  fixedTabBar: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    shadowOpacity: 0.185,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 4,
  },
  scrollView: {},
  chatScreenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  leftBox: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 10,
  },
  friendImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
  textBoxFromFriend: {
    width: width - 150,
    padding: 10,
    color: '#fff',
    marginLeft: 10,
    margin: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    borderTopLeftRadius: 100,
    overflow: 'hidden',
  },
  rightBox: {
    marginRight: 10,
    margin: 10,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  messageFromYou: {
    color: '#fff',
    padding: 10,
    width: width - 150,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    overflow: 'hidden',
  },
  fixedInputTextbox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
};

export default styles;
