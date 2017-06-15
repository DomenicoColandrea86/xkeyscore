import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
  slides: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosText: {
    fontSize: 16,
    padding: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 0,
  },
  aText: {
    fontSize: 16,
    padding: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 40,
  },
  iospaginationText: {
    position: 'relative',
    top: -(height / 7),
    fontSize: 20,
    lineHeight: 0,
    fontWeight: 'bold',
  },
  apaginationText: {
    top: -(height / 9),
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  swiperDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20,
  },
  swiperActiveDot: {
    backgroundColor: '#F7524C',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 20,
  },
  imageIcons: {
    fontSize: 120,
  },
  Button: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  loginText: {
    fontSize: 18,
    color: '#797979',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    height: height / 2,
    width: width / 1.7,
  },
  img1: {
    height: (height / 4),
    width: width / 1.7,
  },
  img2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  image1: {
    height: height / 2.5,
    width: width / 1.7,
    marginBottom: 30,
  },
  loginBtn: {
    width: width - 60,
    alignSelf: 'center',
    backgroundColor: '#3B5998',
  },
};
