import React from 'react';
import { Text } from 'react-native-elements';
import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = ({ history }) => (
  <Text>
    {
      history.map(h => 
        <SearchHistoryItem
          history={h}
          key={h.text}
        />
      )
    }
  </Text>
);

export default SearchHistory
