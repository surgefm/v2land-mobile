import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { EventTitle, EventTime } from '.';
import { StackList } from '../stacks';
import { HeaderImage, RefreshControl } from '../elements';
import { paddings, paddingConstants } from '../../styles';

const Article = ({
  event,
  onStackPress,
  onNewsPress,
  refreshing,
  onRefresh,
  onScroll = () => {},
  onScrollEndSnapToEdge = () => {},
}) =>
  !event || (
    <ScrollView
      style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}
      onScroll={onScroll}
      onScrollEndDrag={onScrollEndSnapToEdge}
      onMomentumScrollEnd={onScrollEndSnapToEdge}
      scrollEventThrottle={16}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          title="刷新事件进展"
        />
      }
    >
      <HeaderImage headerImage={event.headerImage} />
      <SafeAreaView style={{ flex: 1 }}>
        {!event || (
          <View>
            <View style={[paddings.side, paddings.largeInterval]}>
              <EventTime
                style={[paddings.interval, styles.eventTime]}
                time={1531368000000}
              />
              <EventTitle style={paddings.interval}>{event.name}</EventTitle>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
            <View style={[paddings.side, paddings.largeInterval]}>
              <EventTitle style={paddings.interval}>进展</EventTitle>
              <StackList
                stacks={event.stack}
                onPress={onStackPress}
                onNewsPress={onNewsPress}
              />
            </View>
          </View>
        )}
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
