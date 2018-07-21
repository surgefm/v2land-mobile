import React from 'react';
import { StyleSheet } from 'react-native';
import { fontSizes } from '../../styles';
import { Text } from 'react-native-elements';

const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: 'bold',
  }
});

export default Title;
