import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../../styles';
import { getTimeLapseString } from '../../util';

const TimeBadge = ({ date, title, style }) =>
  title ? (
    <View style={[styles.timeContainer, style]}>
      <Text style={styles.textLeft}>{title}</Text>
    </View>
  ) : (
    !date ||
    !getTimeLapseString(date) || (
      <View style={styles.timeContainer}>
        <Text style={styles.textLeft}>{getTimeLapseString(date, 'general')}</Text>
      </View>
    )
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
