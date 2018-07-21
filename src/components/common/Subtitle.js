import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontSizes } from '../../styles';
import { Text } from 'react-native-elements';

const Subtitle = ({ children, style }) => (
  <View>
    <Text style={[styles.title, style]}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
});

export default Subtitle;
