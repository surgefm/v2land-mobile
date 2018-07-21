import React from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchHistory } from '../components/search';
import { Title, Subtitle } from '../components/common';
import { pageStyle, paddings, searchBarStyle } from '../styles';

const Search = () => (
  <ScrollView style={[pageStyle.background, paddings.pageTop]}>
    <View style={paddings.largeInterval}>
      <View style={[paddings.side, paddings.interval]}>
        <Title>搜索</Title>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <SearchBar
          lightTheme
          containerStyle={searchBarStyle.searchContainer}
          inputStyle={searchBarStyle.searchInput}
          placeholder='输入事件/新闻关键词'
        />
      </View>
    </View>
    <View style={paddings.side}>
      <Subtitle style={paddings.interval}>搜索历史</Subtitle>
      <SearchHistory history={history} />
    </View>
  </ScrollView>
);

const history = [
  { text: 'Vincent女装' },
  { text: 'Alan女装' },
  { text: 'theJian女装' },
  { text: 'Vincent女装1' },
  { text: 'Alan女装1' },
  { text: 'theJian女装1' },
  { text: 'Vincent女装2' },
  { text: 'Alan女装2' },
  { text: 'theJian女装2' },
];

export default Search;
