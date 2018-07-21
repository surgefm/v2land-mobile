import React from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Title } from './Common';
import { pageStyle, paddings, searchBarStyle } from '../styles';

const Search = () => (
  <ScrollView style={pageStyle.default}>
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
  </ScrollView>
);

export default Search;
