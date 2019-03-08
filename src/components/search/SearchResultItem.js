import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const SearchResultItem = ({ result, onPress }) => (
  <TouchableOpacity
    style={styles.resultContainer}
    onPress={() => onPress(result)}
  >
    <Text style={styles.resultTitle}>{result.name}</Text>
    <Text numberOfLines={2}>{result.description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  resultContainer: {
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily: 'source-han-serif-semibold',
  },
});

export default SearchResultItem;
