import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
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
  onPress,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
    <View style={styles.wrapper}>
      <TimeBadge />
      <Card
        containerStyle={styles.cardContainer}
        image={{ uri: getAssetURL(imageUrl) }}
      >
        <View style={styles.eventDescription}>
          <EventTitle>{name}</EventTitle>
          <Text style={styles.textDesc}>{description || ''}</Text>
        </View>
      </Card>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  textDesc: {
    marginTop: 8,
    lineHeight: 20,
  },
  cardContainer: {
    borderRadius: 8,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,

    // FIXME: shadow on android
    /* shadow */
    shadowColor: colors.shadow,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1.0,
    overflow: 'hidden',
  },
  eventDescription: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default EventItem;
