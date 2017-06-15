import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginTop: 1,
  },
  profileImageView: {
    alignItems: 'center',
    marginTop: 25,
  },
  profiledescription: {
    marginTop: 15,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  editIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 35,
    backgroundColor: '#F7524C',
    borderRadius: 18,
    width: 35,
    height: 35,
    overflow: 'hidden',
  },
  editIcon: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  curve: {
    width,
    height: 100,
    borderTopColor: '#000',
    borderWidth: 1,
    borderBottomLeftRadius: 260,
    borderBottomRightRadius: 80,
  },
  nameandage: {},
  nameandagetext: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  workplace: {
    padding: 5,
  },
  workplacetext: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
  },
  collegeText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
  },
  settingsBtnView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  settingsText: {
    color: '#F7524C',
    fontWeight: '600',
    fontSize: 14,
  },
  goinOut: {
    left: 1,
    width,
  },
  goinOutView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
  },
  goinOutBtn: {
    backgroundColor: '#FE4A6B',
    width: width / 1.8,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  goinOutBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
  settingsIcon: {
    color: '#F7524C',
  },
  settingsIcon2: { ...this.settingsIcon, ...{ alignItems: 'flex-start' } },
};
