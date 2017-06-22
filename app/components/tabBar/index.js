/* eslint-disable react/jsx-indent-props */

import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBar = React.createClass({
  tabIcons: [],
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },
  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => this.props.goToPage(i)}
              style={styles.tab}
            >
              <View
                style={[
                  tab === 'md-flame' && this.props.activeTab === 1
                    ? {}
                    : styles.iconBtn,
                  {
                    backgroundColor: tab === 'md-flame' &&
                      this.props.activeTab === 1
                      ? 'transparent'
                      : this.props.activeTab === i ? '#F7524C' : 'lightgrey',
                  },
                ]}
              >
                {tab === 'md-person' || tab === 'md-chatboxes'
                  ? <Icon
                      name={tab}
                      size={20}
                      color={'#FFF'}
                      ref={icon => {
                        this.tabIcons[i] = icon;
                      }}
                      style={{
                        marginTop: tab === 'md-chatboxes' ? 4 : undefined,
                      }}
                    />
                  : <Image
                      source={
                        this.props.activeTab === 1
                          ? require('../../../assets/img/logo.png')
                          : require('../../../assets/img/logo1.png')
                      }
                      style={
                        this.props.activeTab === 1
                          ? { width: 30, height: 30 }
                          : { width: 20, height: 23 }
                      }
                    />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  iconBtn: {
    backgroundColor: '#D9E0E4',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnA: {
    backgroundColor: '#D9E0E4',
    width: 60,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    backgroundColor: '#FFF',
    height: Platform.OS === 'android' ? 55 : 70,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 15 : 30,
    alignItems: 'center',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});

export default TabBar;
