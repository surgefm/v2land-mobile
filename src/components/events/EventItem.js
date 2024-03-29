import React from 'react';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';
import {Text} from 'react-native-elements';
import FadeIn from 'react-native-fade-in-image';
import FastImage from 'react-native-fast-image';
import EventTitle from '../article/EventTitle';
import {colors} from '../../styles';
import getAssetURL from '../../util/getAssetURL';

const EventItem = ({name, description, headerImage = {}, onPress}) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
    <View style={styles.cardContainer}>
      <View style={styles.headerImage}>
        <FadeIn placeholderStyle={styles.headerImagePlaceholder}>
          {headerImage === null ? (
            <Image
              style={styles.headerImage}
              source={require('../../static/defaultHeaderImage.png')}
            />
          ) : (
            <FastImage
              style={styles.headerImage}
              source={{uri: getAssetURL(headerImage.imageUrl)}}
            />
          )}
        </FadeIn>
      </View>

      <View style={styles.eventDescription}>
        <EventTitle>{name}</EventTitle>
        <Text numberOfLines={4} style={styles.textDesc}>
          {description ? description.split('\n').join('') : ''}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 10,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  headerImagePlaceholder: {
    backgroundColor: 'rgb(243, 249, 251)',
  },
  eventDescription: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  textDesc: {
    marginTop: 8,
    lineHeight: 20,
    fontFamily: 'SourceHanSansCN-Regular',
    textAlign: 'justify',
  },
});

export default EventItem;
