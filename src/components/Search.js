import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SearchHistory } from './search';
import { Title, Subtitle } from './elements';
import { pageStyle, paddings, searchBarStyle } from '../styles';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  render() {
    return (
      <ScrollView style={[pageStyle.background, paddings.pageTop]}>
        <View style={paddings.largeInterval}>
          <View style={[paddings.side, paddings.interval]}>
            <Title>搜索</Title>
          </View>
          <View style={{ paddingHorizontal: 8 }}>
            <SearchBar
              ref={(search) => this.search = search}
              value={this.state.search}
              onChangeText={(text) => this.setState({ search: text })}
              containerStyle={searchBarStyle.searchContainer}
              inputStyle={searchBarStyle.searchInput}
              clearIcon={{ color: '#86939e', name: 'close' }}
              placeholder='输入事件/新闻关键词'
              lightTheme
            />
          </View>
        </View>
        <View style={paddings.side}>
          <Subtitle style={paddings.interval}>搜索历史</Subtitle>
          <SearchHistory history={history} />
        </View>
      </ScrollView>
    );
  }
}

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
