import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { colors } from 'styles';

const SearchHistoryItem = ({ history } = {}) => (
  <View style={styles.view}>
    <Text style={{ color: colors.blue }}>{history.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginRight: 8,
    paddingVertical: 4,
  },
});

export default SearchHistoryItem;
