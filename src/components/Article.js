import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { EventTitle, EventTime } from './article';
import { StackList } from './stacks';
import { HeaderImage } from './elements';
import { paddings, paddingConstants } from '../styles';

const Article = ({ event, onStackPress }) => (
  <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
    <HeaderImage headerImage={event.headerImage} />
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
      {!event || <View>
        <View style={[paddings.side, paddings.largeInterval]}>
          <EventTime style={[paddings.interval, styles.eventTime]} time={1542083664886} />
          <EventTitle style={paddings.interval}>{event.name}</EventTitle>
          <Text style={styles.eventDescription}>{event.description}</Text>
        </View>
        <View style={[paddings.side, paddings.largeInterval]}>
          <EventTitle style={paddings.interval}>进展</EventTitle>
          <StackList stacks={event.stack} onPress={onStackPress} />
        </View>
      </View>}
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  eventTime: {
    paddingTop: paddingConstants.largeInterval,
  },
  eventDescription: {
    fontSize: 14,
    lineHeight: 22,
  },
});

export default Article;
