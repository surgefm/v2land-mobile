import React from 'react';
import styles from '../../styles';
import { Text } from 'react-native-elements';

const EventTitle = ({ children, style = {} }) => (
  <Text style={[style, styles.eventTitle]}>{children}</Text>
);

export default EventTitle;
