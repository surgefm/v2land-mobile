import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BreakLine } from '../elements';
import NewsList from '../../containers/NewsList';
import { colors, paddings } from '../../styles';
import { getTimeString, trimText } from '../../util';

const StackItem = ({ stack, onNewsPress, isLastStack }) => (
  <View>
    <Text style={[styles.title, paddings.interval]}>
      {trimText(stack.title)}
    </Text>
    {!getTimeString(stack.time) || (
      <Text style={[paddings.interval, styles.time]}>
        {getTimeString(stack.time, {
          showWeekday: false,
          withSpaceBetween: true,
          forceShowYear: true,
        })}
      </Text>
    )}
    <Text style={styles.description}>
      {trimText(stack.description)}
    </Text>
    <Text style={styles.buttonText}>
      {stack.newsCount} 条相关新闻
    </Text>

    <NewsList
      style={styles.newsList}
      stackId={stack.id}
      newsList={stack.news}
      onNewsPress={onNewsPress}
      newsCount={stack.newsCount}
    />

    {isLastStack || <BreakLine style={styles.breakLine} />}
  </View>
);

export default StackItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'source-han-sans',
  },
  time: {
    fontSize: 16,
    lineHeight: 17,
    color: colors.theme,
    fontFamily: 'source-han-sans',
  },
  description: {
    paddingBottom: 12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'source-han-sans',
  },
  buttonText: {
    fontSize: 14,
    color: colors.darkGrey,
    lineHeight: 15,
    marginTop: 4,
    fontFamily: 'source-han-sans',
  },
  newsList: {
    marginTop: 2,
  },
  breakLine: {
    marginVertical: 20,
  },
});
