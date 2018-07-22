import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = ({ history }) => (
  <View style={styles.history}>
    {
      history.map(h =>
        <SearchHistoryItem
          history={h}
          key={h.text}
        />
      )
    }
  </View>
);

const styles = StyleSheet.create({
  history: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SearchHistory;
