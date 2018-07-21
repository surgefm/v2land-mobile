import React from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Title, Subtitle } from './common';
import { SearchHistory } from './search/index';
import { pageStyle, paddings, searchBarStyle } from '../styles';

const Search = () => (
  <ScrollView style={pageStyle.default}>
    <View style={paddings.interval}>
      <View style={paddings.interval}>
        <Title>搜索</Title>
      </View>
      <SearchBar
        lightTheme
        round={true}
        containerStyle={searchBarStyle.searchContainer}
        inputStyle={searchBarStyle.searchInput}
        placeholder='输入事件/新闻关键词'
      />
    </View>
    <View>
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
