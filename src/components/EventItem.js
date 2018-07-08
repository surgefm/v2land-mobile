import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-elements';
import EventTitle from './EventTitle';
import TimeBadge from './TimeBadge';
import { colors } from '../styles';
import getAssetURL from '../util/getAssetURL';

const EventItem = ({
  name,
  description,
  imageUrl,
  source,
  sourceUrl,
}) => (
  <View style={styles.wrapper}>
    <TimeBadge />
    <Card
      containerStyle={styles.cardContainer}
      image={{ uri: getAssetURL(imageUrl) }}
    >
      <EventTitle>{name}</EventTitle>
      <Text style={styles.textDesc}>{description || ''}</Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  textDesc: {
    marginTop: 8,
  },
  cardContainer: {
    padding: 16,
    borderRadius: 18,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,

    // FIXME: shadow on android
    /* shadow */
    shadowColor: colors.shadow,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1.0,
  }
});

export default EventItem;
