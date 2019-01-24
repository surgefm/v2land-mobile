import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { colors } from '../../styles';

const NewsItem = ({ news, onPress }) => (
  <TouchableOpacity
    style={styles.newsContainer}
    onPress={() =>
      onPress({
        eventId: news.eventId,
        stackId: news.stackId,
        newsId: news.id,
      })
    }
  >
    <Image
      style={styles.source}
      source={require('../../static/defaultSource.png')}
    />

    <Text numberOfLines={1} style={styles.title}>
      {news.title}
    </Text>

    <View style={styles.rightContainer}>
      <LinearGradient
        style={styles.shade}
        colors={['rgba(256, 256, 256, 0)', 'rgba(256, 256, 256, 1)']}
        start={[0, 0.5]}
        end={[0.7, 0.5]}
      >
        <Icon
          type="ionicon"
          color={colors.darkGrey}
          style={styles.icon}
          name="md-arrow-dropright"
          size={20}
        />
      </LinearGradient>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'center',
  },
  source: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  title: {
    size: 14,
    lineHeight: 18,
    fontFamily: 'source-han-sans',
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  shade: {
    width: 40,
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    marginRight: 8,
    backgroundColor: '#fff',
  },
});

export default NewsItem;
