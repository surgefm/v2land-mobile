import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import EventTitle from './EventTitle';
import { HeaderImage, Subtitle } from './elements';
import { paddings, paddingConstants } from '../styles';

const Article = ({ event }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} forceInset={{ top: 'never' }}>
    <ScrollView>
      <HeaderImage headerImage={event.headerImage} />
      <View style={[paddings.side, paddings.largeInterval]}>
        <Subtitle style={[paddings.interval, styles.eventTime]}>今天</Subtitle>
        <EventTitle style={paddings.interval}>{event.name}</EventTitle>
        <Text style={styles.eventDescription}>{event.description}</Text>
      </View>
      <View style={[paddings.side, paddings.largeInterval]}>
        <EventTitle style={paddings.interval}>进展</EventTitle>
        {/* <Subtitle>{event.stack[0].title}</Subtitle> */}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  eventTime: {
    paddingTop: paddingConstants.largeInterval,
  },
  eventDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default Article;
