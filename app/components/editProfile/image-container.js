import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Icon } from 'native-base';

class ImageContainer extends Component {
  render() {
    return (
      <View style={[styles.container, { marginLeft: this.props.marginLeft }]}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Image
              style={{ width: null, height: 95, borderRadius: 4 }}
              source={(this.props.source) ? this.props.source : null}
            />
          </View>
          <View style={styles.addButtonLayout}>
            <View style={styles.addButton}>
              {(this.props.source) ? <Icon name="md-close" style={styles.icon} /> : <Icon name="md-add" style={styles.icon} />}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 95,
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  boxContainer: {
    flex: 1,
    marginBottom: (Platform.OS === 'android') ? 5 : undefined,
    marginRight: (Platform.OS === 'android') ? 5 : undefined,
  },
  box: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  addButtonLayout: {
    backgroundColor: '#FF6A6A',
    height: 25,
    width: 25,
    borderRadius: 12.5,
    position: 'absolute',
    bottom: -5,
    right: -5,
    borderWidth: 3,
    borderColor: 'white',
  },
  addButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  icon: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
};

export default ImageContainer;
