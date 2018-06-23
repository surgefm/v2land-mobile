import React from 'react';
import { StyleSheet } from 'react-native';
import styles from '../styles';
import { Text } from 'react-native-elements';

const EventTitle = ({ children }) => (
  <Text style={styles.eventTitle}>{children}</Text>
)

export default EventTitle;
