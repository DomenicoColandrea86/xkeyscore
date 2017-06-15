import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Text,
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';
import {
  Button,
  Icon,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';

export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  setImages(images) {
    this._images = images;
  }

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({ modalVisible: visible });
  }

  onActionsPress() {
    const options = ['Choose From Gallery', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({ options, cancelButtonIndex },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.setModalVisible(true);
            break;
          default:
        }
      }
    );
  }

  selectImages(images) {
    this.setImages(images);
  }

  renderNavBar() {
    return (
      <Header style={{ backgroundColor: '#FFF' }}>
        <Left>
          <Button transparent onPress={() => { this.setModalVisible(false); }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Cancel</Text>
          </Button>
        </Left>
        <Body>
          <Title style={{ color: '#000' }}>
            Camera Roll
          </Title>
        </Body>
        <Right>
          <Button
            transparent onPress={() => {
              this.setModalVisible(false);
              const images = this.getImages().map((image) => {
                return {
                  image: image.uri,
                };
              });
              this.props.onSend(images);
              this.setImages([]);
            }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Send</Text>
          </Button>
        </Right>
      </Header>
    );
  }

  renderIcon() {
    if (this.props.icon) return this.props.icon();
    return (
      <View style={styles.wrapper}>
        <Icon name="md-add" style={styles.iconText} />
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
        </Modal>
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconText: {
    color: '#F7524C',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 36,
  },
};

CustomActions.contextTypes = {
  actionSheet: React.PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => {
  },
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: React.PropTypes.func,
  options: React.PropTypes.object,
  icon: React.PropTypes.func,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  iconTextStyle: ViewPropTypes.style,
};
