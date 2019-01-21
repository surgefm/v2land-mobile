import React from 'react';
import { StyleSheet, SectionList, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-navigation';
import { colors, paddings, paddingConstants } from '../styles';
import SvgUri from 'react-native-svg-uri';
import { EventItem, TimeBadge } from './events';

const Events = ({ onEventPress, eventList }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={[styles.container, paddings.side]}>
      <View style={[styles.header, paddings.largeInterval]}>
        <SvgUri
          width="100"
          height="50"
          source={require('../static/logotype.svg')}
        />
      </View>
      <SectionList
        sections={eventList}
        style={{ paddingBottom: 50 }}
        renderItem={({ item }) => (
          <EventItem
            name={item.name}
            description={item.description}
            headerImage={item.headerImage}
            onPress={onEventPress(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TimeBadge style={styles.sectionHeader} title={title} />
        )}
        renderSectionFooter={() => <View style={{ height: 16 }} />}
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
