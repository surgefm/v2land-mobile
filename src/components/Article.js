import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { EventTitle, EventTime } from './article';
import { StackList } from './stacks';
import { HeaderImage, BackButton, RefreshControl } from './elements';
import { paddings, paddingConstants, buttonStyles } from '../styles';

const Article = ({ event, onStackPress, goBack, refreshing, onRefresh }) => !event ||(
  <ScrollView
    style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
        title='刷新事件进展'/>
    }>
    <HeaderImage headerImage={event.headerImage} />
    <SafeAreaView style={{ flex: 1 }}>
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

    <BackButton
      style={buttonStyles.goBackButton}
      onPress={() => {
        goBack();
      }} />
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
