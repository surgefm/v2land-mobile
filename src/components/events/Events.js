import React from 'react';
import { StyleSheet, SectionList, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
// import { ScrollView } from 'react-navigation';
import { colors, paddings, paddingConstants } from '../../styles';
import SvgUri from 'react-native-svg-uri';
import { RefreshControl } from '../elements';
import { EventItem, TimeBadge } from '.';

const Events = ({ onEventPress, eventList, refreshing, onRefresh }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView
      style={[styles.container, paddings.side]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          title="加载最新事件"
        />
      }
    >
      <StatusBar barStyle="dark-content" />
      <View style={[styles.header, paddings.largeInterval]}>
        <SvgUri
          width="100"
          height="50"
          source={require('../../static/logotype.svg')}
        />
      </View>
      <SectionList
        sections={eventList}
        style={{ paddingBottom: 50, overflow: 'visible' }}
        renderItem={({ item }) => (
          <EventItem
            name={item.name}
            description={item.description}
            headerImage={item.headerImage}
            onPress={onEventPress(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TimeBadge style={styles.sectionHeader} title={title} />
        )}
        renderSectionFooter={() => <View style={{ height: 20 }} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: paddingConstants.top,
    backgroundColor: colors.lightGrey,
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCircle: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Events;
