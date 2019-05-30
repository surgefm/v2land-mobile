import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { EventTitle, EventTime } from '.';
import { StackList } from 'components/stacks';
import Description from './Description';
import { HeaderImage, RefreshControl } from 'components/elements';
import { paddings, paddingConstants, colors } from 'styles';
import { SubscriptionEditor } from 'containers/subscription';

const Article = ({
  event,
  onStackPress,
  onNewsPress,
  refreshing,
  statusBarStyle,
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
      <StatusBar barStyle={statusBarStyle} />
      <HeaderImage headerImage={event.headerImage} />
      <View style={{ flex: 1 }}>
        {!event || (
          <View>
            <View style={[paddings.side, paddings.largeInterval]}>
              <EventTime
                style={[paddings.interval, styles.eventTime]}
                time={event.updatedAt}
              />
              <EventTitle style={paddings.interval}>{event.name}</EventTitle>
              <Description description={event.description} />
            </View>
            {!event.stacks || <View style={[paddings.side, paddings.largeInterval]}>
              <EventTitle style={paddings.interval}>进展</EventTitle>
              <StackList
                stacks={event.stacks}
                onPress={onStackPress}
                onNewsPress={onNewsPress}
              />
            </View>}
          </View>
        )}
      </View>
      <SubscriptionEditor eventId={event.id} />
    </ScrollView>
  );

const styles = StyleSheet.create({
  eventTime: {
    paddingTop: paddingConstants.largeInterval,
    color: colors.theme,
  },
  eventDescription: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SourceHanSansCN-Regular',
  },
});

export default Article;
