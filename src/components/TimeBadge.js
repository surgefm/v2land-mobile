import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import { colors } from '../styles';

const TimeBadge = ({ date }) => (
  <Badge containerStyle={styles.badge}>
    <Text>Today</Text>
  </Badge>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.blue,
    alignSelf: 'flex-start',
  }
});

export default TimeBadge;
