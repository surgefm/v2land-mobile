import React from 'react';
import { StyleSheet, View, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';
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
  setScrollView = () => {},
  onScrollEndSnapToEdge = () => {},
}) => !event ||(
  <Animated.ScrollView
    style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}
    ref={setScrollView}
    onScroll={onScrollEndSnapToEdge}
    onScrollEndDrag={onScrollEndSnapToEdge}
    onMomentumScrollEnd={onScrollEndSnapToEdge}
    scrollEventThrottle={16}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
        title='刷新事件进展'/>
    }>
    <StatusBar hidden />
    <HeaderImage headerImage={event.headerImage} />
    <SafeAreaView style={{ flex: 1 }}>
      {!event || <View>
        <View style={[paddings.side, paddings.largeInterval]}>
          <EventTime style={[paddings.interval, styles.eventTime]} time={1531368000000} />
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
      </View>}
    </SafeAreaView>
  </Animated.ScrollView>
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
