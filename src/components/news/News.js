import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Subtitle } from '../elements';
import { EventTime, EventTitle } from '../article';
import { getTimeString } from '../../util';
import {
  paddings,
  pageStyle,
  paddingConstants,
  colors,
  fontSizes,
} from '../../styles';

const News = ({ news, onButtonPress = () => {} }) =>
  !news || (
    <ScrollView style={[pageStyle.default, styles.topPadding]}>
      <StatusBar barStyle="dark-content" />
      <View style={[paddings.interval, styles.newsSubtitle]}>
        <Subtitle style={styles.theme}>
          {getTimeString(news.time, { withSpaceBetween: true }) + ' / '}
        </Subtitle>
        <EventTime style={styles.theme} time={news.time} />
      </View>
      <EventTitle style={paddings.interval}>{news.title}</EventTitle>
      <View style={[paddings.interval, styles.newsSource]}>
        <Image
          style={styles.sourceIcon}
          source={require('../../static/defaultSource.png')}
        />
        <Text>{news.source}</Text>
      </View>
      <Text style={[styles.newsDescription, paddings.largeInterval]}>
        {news.abstract}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, paddings.interval]}
        onPress={() => onButtonPress()}
      >
        <Text style={styles.buttonText}>浏览原文</Text>
        <Icon
          type="material-community"
          color={colors.darkGrey}
          name={'arrow-right'}
          size={11}
        />
      </TouchableOpacity>
    </ScrollView>
  );

const styles = StyleSheet.create({
  topPadding: {
    paddingTop: paddingConstants.largeInterval,
  },
  newsSubtitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  theme: {
    color: colors.theme,
  },
  newsSource: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  sourceIcon: {
    width: fontSizes.medium,
    height: fontSizes.medium,
    marginRight: 4,
  },
  newsDescription: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'source-han-sans',
    textAlign: 'justify',
  },
  button: {
    padding: 6,
    borderRadius: 4,
    borderColor: colors.darkGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: colors.darkGrey,
    paddingRight: 4,
  },
});

export default News;
