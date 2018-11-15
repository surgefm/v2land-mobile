import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { BreakLine } from '../elements';
import { colors, paddings } from '../../styles';
import { getTimeString, trimText } from '../../util';

const StackItem = ({ stack, isLastStack = false, onPress = () => {} }) => !stack || (
  <View>
    <Text style={[styles.title, paddings.interval]}>{trimText(stack.title)}</Text>
    {!getTimeString(stack.time) || <Text style={[paddings.interval, styles.time]}>
      {getTimeString(stack.time, {
        showWeekday: false,
        withSpaceBetween: true,
        forceShowYear: true,
      })}
    </Text>}
    <Text style={styles.description}>{trimText(stack.description)}</Text>
    <TouchableOpacity
      activeOpacity={.8}
      style={[styles.button, paddings.interval]}
      onPress={onPress({ stackId: stack.id })}>
      <Text style={styles.buttonText}>查看 {stack.news.length} 条相关新闻</Text>
      <Icon
        type='material-community'
        color={colors.darkGrey}
        name='arrow-right'
        size={11} />
    </TouchableOpacity>

    {isLastStack || <BreakLine style={styles.breakLine} />}
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  time: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  description: {
    paddingBottom: 12,
    fontSize: 14,
    lineHeight: 22,
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
  breakLine: {
    marginVertical: 20,
  },
});

export default StackItem;
