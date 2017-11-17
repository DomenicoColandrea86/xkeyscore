import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Text,
  Card,
  CardItem,
  DeckSwiper,
  Grid,
  Row,
  Icon,
  Button,
  Right,
  Body,
} from 'native-base';
import styles from './style';

const users = [
  {
    name: '25 Ottawa Avenue SW',
    age: '$19,550,000',
    college: 'Franklin Ottawa LLC',
    image: require('../../../assets/img/s1.jpg'),
    num: 904,
  },
  {
    name: '80 South Street',
    age: '$390,000,000',
    college: 'Howard Hughes Corp',
    image: require('../../../assets/img/s2.jpg'),
    num: 429,
  },
  {
    name: '160 East 48th Street',
    age: '$270,000,000',
    college: 'Rao & Rao LLC',
    image: require('../../../assets/img/s3.jpg'),
    num: 876,
  },
  {
    name: '2300 E. Beltline Avenue NE',
    age: '$1,550,000',
    college: 'Village Crossing LLC',
    image: require('../../../assets/img/m4.jpg'),
    num: 1073,
  },
  {
    name: '99 Monroe Avenue NW',
    age: '$31,950,000',
    college: 'Franklin Monroe LLC',
    image: require('../../../assets/img/m3.jpg'),
    num: 356,
  },
];

class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: null,
      opac: 0,
    };
  }

  handleImageClick() {
    this.props.pushRoute(
      { key: 'photoCardDetails', index: 1 },
      this.props.navigation.key,
    );
  }

  render() {
    return (
      <Container style={styles.wrapper}>
        <View style={styles.wrapperView}>
          <DeckSwiper
            activeOpacity={1}
            dataSource={users}
            ref={mr => this._deckSwiper}
            onSwiping={(dir, opa) =>
              this.setState({ direction: dir, opac: opa })}
            renderTop={item =>
              <Card activeOpacity={1} style={styles.card}>
                <CardItem
                  style={styles.cardItem}
                  activeOpacity={1}
                  cardBody
                  onPress={() => Actions.photoCardDetails()}
                >
                  <Image style={styles.cardMain} source={item.image}>
                    {this.state.direction === 'left' &&
                      <View
                        style={{
                          opacity: -this.state.opac / 150,
                          position: 'absolute',
                          right: 30,
                          top: 40,
                          borderWidth: 2,
                          borderRadius: 5,
                          borderColor: '#F7524C',
                          width: 100,
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          transform: [{ rotate: '20deg' }],
                        }}
                      >
                        <Text style={styles.cardMainTextLeft}>NOPE</Text>
                      </View>}
                    {this.state.direction === 'right' &&
                      <View
                        style={{
                          opacity: this.state.opac / 150,
                          position: 'absolute',
                          left: 30,
                          top: 40,
                          borderWidth: 2,
                          borderRadius: 5,
                          borderColor: '#59DBB6',
                          width: 100,
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          transform: [{ rotate: '-20deg' }],
                        }}
                      >
                        <Text style={styles.cardMainTextRight}>Like</Text>
                      </View>}
                  </Image>
                </CardItem>
                <CardItem
                  activeOpacity={1}
                  onPress={() => Actions.photoCardDetails()}
                  style={styles.cardItem}
                >
                  <Body>
                    <Text style={styles.textLeft}>
                      {item.name} {item.age}
                    </Text>
                    <Text style={styles.subtextLeft}>
                      {item.college}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent textStyle={styles.cardButton}>
                      <Icon name="md-book" style={styles.cardIcon} />
                      <Text style={styles.textLeft}>
                        {item.num}
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>}
            renderBottom={item =>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem} cardBody>
                  <Image style={styles.cardMain} source={item.image} />
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.textLeft}>
                      {item.name}, {item.age}
                    </Text>
                    <Text style={styles.subtextLeft}>
                      {item.college}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      style={styles.bookBtn}
                      textStyle={styles.cardButton}
                    >
                      <Icon name="md-book" style={styles.cardIcon} />
                      <Text style={styles.textLeft}>
                        {item.num}
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>}
          />
        </View>
        <Grid style={styles.bottomGrid}>
          <Row style={styles.bottomRowStyle}>
            <TouchableOpacity style={styles.bottomRoundedSmallPills}>
              <Icon name="md-refresh" style={styles.refreshIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomRoundedPills}
              onPress={() => this._deckSwiper._root.swipeLeft()}
            >
              <Icon name="md-close" style={styles.closeIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomRoundedPills}
              onPress={() => this._deckSwiper._root.swipeRight()}
            >
              <Icon name="md-heart" style={styles.heartIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomRoundedSmallPills}
              onPress={() => Actions.photoCardDetails()}
            >
              <Icon name="md-star" style={styles.starIcon} />
            </TouchableOpacity>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const bindActions = dispatch => ({
  pushRoute: (route, key) => dispatch(this.pushRoute(route, key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(PhotoCard);
