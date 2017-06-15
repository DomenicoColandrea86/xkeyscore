import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Icon, Button } from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './style';

const { width, height } = Dimensions.get('window');

class UserDetails extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Content style={{ marginTop: (Platform.OS === 'ios') ? 20 : 0 }}>
          {(Platform.OS === 'android') &&
          <Button style={styles.createBtn} onPress={() => Actions.editprofile()}>
            <Icon name="md-create" style={{ width: 20, left: -5 }} />
          </Button>
          }
          <View style={styles.instagramPhotosCarousel}>
            <Swiper
              style={styles.wrapper}
              width={width}
              height={height / 1.5}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
              loop={false}
            >
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/img/rf1.jpg')} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/img/federerOne.jpg')} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/img/rf2.jpg')} />
              </View>
            </Swiper>
            {(Platform.OS === 'android') &&
            <Button style={styles.createBtn} onPress={() => Actions.editprofile()}>
              <Icon name="md-create" />
            </Button>
            }
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255,0.1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="ios-arrow-back"
                style={{
                  fontSize: 30,
                  marginTop: (Platform.OS === 'ios') ? 5 : undefined,
                  marginLeft: (Platform.OS === 'ios') ? -3 : undefined,
                  color: '#F7524C',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.subText}>
            <Text style={styles.name}>Roger Federer, 34</Text>
            <Text style={styles.workingText}>World Class Tennis Player</Text>
            <Button style={styles.createBtn} onPress={() => Actions.editprofile()}>
              <Icon name="md-create" style={{ width: 18, left: -5 }} />
            </Button>
          </View>
          <View style={styles.quote}>
            <Text>
              Good things happen when we meet strangers!!
              Also, about section here
              This is specific user details page
            </Text>
          </View>
          <View style={styles.instagramPhotoCount}>
            <Text>12 Instagram Photos</Text>
          </View>
          <View style={styles.thumbnailView}>
            <Swiper
              style={styles.wrapper2}
              width={width}
              height={(Platform.OS === 'ios') ? ((width / 3) - 5) * 2 : ((width / 3) + 14) * 2 }
              paginationStyle={styles.paginationStyle}
              dot={<View style={styles.thumbnailDot} />}
              activeDot={<View style={styles.activeThumbnailDot} />}
              loop={false}
            >
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
              </View>
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federerOne.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/federer.jpg')} />
              </View>
            </Swiper>
          </View>
          <View style={styles.interestTextHeading}>
            <Text >3 interests</Text>
          </View>
          <View style={styles.interestsView}>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Deepika Padukone</Text>
            </View>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Kapil Sharma</Text>
            </View>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Game of Thrones</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect()(UserDetails);
