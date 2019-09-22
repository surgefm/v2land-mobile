import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Description = ({description}) => (
  <View>
    {typeof description === 'undefined' ||
      description.split('\n').map(description => (
        <Text style={styles.eventDescription} key={description}>
          {description}
        </Text>
      ))}
  </View>
);

const styles = StyleSheet.create({
  eventDescription: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SourceHanSansCN-Regular',
    marginBottom: 8,
    textAlign: 'justify',
  },
});

export default Description;
