import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { fontSizes } from '../../styles';

const Title = ({ children, style }) => (
  <View>
    <Text style={[styles.title, style]}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
});

export default Title;
