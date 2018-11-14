import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../../styles';

const TimeBadge = ({ date }) => (
  <View style={styles.timeContainer}>
    <Text style={styles.textLeft}>今天</Text>
    <Text style={styles.textRight}>7月28日 星期六</Text>
  </View>
);

const styles = StyleSheet.create({
  timeContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  textLeft: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  textRight: {
    color: colors.black,
  },
});

export default TimeBadge;
