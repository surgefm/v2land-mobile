import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { getTimeString, getTimeLapseString } from '../../util';

const TimeBadge = ({ date }) =>
  !date ||
  !getTimeLapseString(date) || (
    <View style={styles.timeContainer}>
      <Text style={styles.textLeft}>{getTimeLapseString(date, 'general')}</Text>
      <Text style={styles.textRight}>{getTimeString(date)}</Text>
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
