import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Grid, Row, Icon, Button } from 'native-base';
import Swiper from 'react-native-swiper';
import styles from './style';

const { width, height } = Dimensions.get('window');

class PhotoCardDetails extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Content style={{ marginTop: (Platform.OS === 'ios') ? 20 : undefined }}>
          <View style={styles.instagramPhotosCarousel}>
            <Swiper
              style={styles.wrapper}
              width={width}
              height={height / 1.5}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
              loop={false}>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/img/r4.jpg')} />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('../../../assets/img/r5.jpg')}
                />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/img/r1.jpeg')} />
              </View>
            </Swiper>
            <Button
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
              <Icon name="ios-arrow-back" style={{ color: '#F7524C', alignSelf: 'center', width: 10 }} />
            </Button>
          </View>
          <View style={styles.subText}>
            <Text style={styles.name}>Rachel McAdams, 26</Text>
            <Text style={styles.workingText}>Model, Actress</Text>
            <Text style={styles.distanceAwayText}>3 km away</Text>
          </View>
          <View style={styles.quote}>
            <Text style={styles.distanceAwayText2}>
              Good things happen when we meet strangers!!
              Also, about section here
              This is specific user details page
            </Text>
          </View>
          <View
            style={styles.instagramPhotoCount}
          >
            <Text>200 Instagram Photos</Text>
          </View>
          <View style={styles.thumbnailView}>
            <Swiper
              style={styles.wrapper2} width={width}
              height={(Platform.OS === 'ios') ? ((width / 3) - 5) * 2 : ((width / 3) + 14) * 2 }
              paginationStyle={styles.paginationStyle}
              dot={<View style={styles.thumbnailDot} />}
              activeDot={<View style={styles.activeThumbnailDot} />}
              loop={false}
            >
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/r3.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r4.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r5.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r6.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r1.jpeg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r2.jpg')} />
              </View>
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/r2.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r6.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r3.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r1.jpeg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r4.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r5.jpg')} />
              </View>
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/r6.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r5.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r4.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r3.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r2.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r1.jpeg')} />
              </View>
              <View style={styles.sixThumbnailsInCarousel}>
                <Image style={styles.thumbnail} source={require('../../../assets/img/r1.jpeg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r2.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r3.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r4.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r5.jpg')} />
                <Image style={styles.thumbnail} source={require('../../../assets/img/r6.jpg')} />
              </View>
            </Swiper>
          </View>
          <View style={styles.interestTextHeading}>
            <Text >3 interests</Text>
          </View>
          <View style={styles.interestsView}>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Southpaw</Text>
            </View>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Hollywood</Text>
            </View>
            <View style={styles.interestTextView}>
              <Text style={styles.interestText}> Game of Thrones</Text>
            </View>
          </View>
        </Content>
        <View>
          <Grid style={styles.bottomPillsView}>
            <Row style={styles.bottomRowStyle}>
              <TouchableOpacity onPress={() => Actions.pop()} style={styles.bottomRoundedSalmonPills}>
                <Icon active name="close" style={{ color: 'white', fontSize: 35, alignSelf: 'center', top: 2 }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomRoundedSpringGreenPills}>
                <Icon active name="star" style={{ color: 'white', fontSize: 35, alignSelf: 'center' }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomRoundedBluePills}>
                <Icon active name="heart" style={{ color: 'white', fontSize: 35, alignSelf: 'center', top: 2 }} />
              </TouchableOpacity>
            </Row>
          </Grid>
        </View>
      </Container>
    );
  }
}

const bindActions = (dispatch) => ({
  popRoute: key => dispatch(this.popRoute(key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(PhotoCardDetails);
