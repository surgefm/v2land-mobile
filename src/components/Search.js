import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import { SearchHistory, SearchResultItem } from 'components/search';
import { Subtitle } from 'components/elements';
import { pageStyle, paddings, searchBarStyle } from 'styles';

const Search = ({
  keyword,
  searchResults,
  onInputChange,
  onClear,
  goToEvent,
}) => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, paddingBottom: 48 }}>
    <StatusBar barStyle="dark-content" />
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[pageStyle.background, paddings.pageTop]}
    >
      <View style={paddings.largeInterval}>
        <View style={[paddings.side, paddings.interval]}>
          <SvgUri
            width="82.31"
            height="40"
            source={require('../static/search.svg')}
          />
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <SearchBar
            value={keyword}
            onChangeText={onInputChange}
            onClear={onClear}
            containerStyle={searchBarStyle.searchContainer}
            inputContainerStyle={searchBarStyle.searchInput}
            clearIcon={{ color: '#86939e', name: 'close', type: 'antdesign' }}
            placeholder="输入事件/新闻关键词"
            lightTheme
          />
        </View>
        {(searchResults || []).map(s => (
          <SearchResultItem
            key={s._id}
            result={s._source}
            onPress={goToEvent}
          />)
        )}
      </View>
      {/* {searchResults.length
        ? <View style={paddings.largeInterval} />
        : <View style={paddings.side}>
          <Subtitle style={paddings.interval}>搜索历史</Subtitle>
          <SearchHistory history={history} />
        </View>} */}
    </ScrollView>
  </SafeAreaView>
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
