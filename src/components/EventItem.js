import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-elements';
import EventTitle from './EventTitle';
import { colors } from '../styles';
import getAssetURL from '../util/getAssetURL';

const EventItem = ({
  name,
  description,
  imageUrl,
  source,
  sourceUrl,
}) => (
  <Card
    containerStyle={styles.cardContainer}
    image={{ uri: getAssetURL(imageUrl) }}
  >
    <EventTitle>{name}</EventTitle>
    <Text style={styles.textDesc}>{description || ''}</Text>
  </Card>
);

const styles = StyleSheet.create({
  textDesc: {
    marginTop: 8,
  },
  cardContainer: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 0,
    marginBottom: 40,

    // FIXME: shadow on android
    /* shadow */
    shadowColor: colors.shadow,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1.0,
  }
});

export default EventItem;
