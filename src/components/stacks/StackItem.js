import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BreakLine } from 'components/elements';
import NewsList from 'containers/NewsList';
import { colors, paddings } from 'styles';
import { getTimeString, trimText } from 'util';

const StackItem = ({ stack, onNewsPress, isLastStack, index }) => (
  <View>
    <Text style={[styles.title, paddings.interval]}>
      {index}、{trimText(stack.title)}
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
    fontFamily: 'SourceHanSansCN-Regular',
  },
  time: {
    fontSize: 16,
    lineHeight: 17,
    color: colors.theme,
    fontFamily: 'SourceHanSansCN-Regular',
  },
  description: {
    paddingBottom: 12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'SourceHanSansCN-Regular',
    textAlign: 'justify',
  },
  buttonText: {
    fontSize: 14,
    color: colors.darkGrey,
    lineHeight: 15,
    marginTop: 4,
    fontFamily: 'SourceHanSansCN-Regular',
  },
  newsList: {
    marginTop: 2,
  },
  breakLine: {
    marginVertical: 20,
  },
});
