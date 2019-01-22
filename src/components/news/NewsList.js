import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import NewsItem from '../../containers/NewsItem';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListLoading: false,
    };
  }

  async onLoadingPress() {
    this.setState(state => ({
      ...state,
      isListLoading: true,
    }));

    await this.props.fetchNewsList({
      where: {
        stack: this.props.stackId,
        status: 'admitted',
      },
      page: Math.floor(this.props.newsList.length / 15) + 1,
    });

    this.setState(state => ({
      ...state,
      isListLoading: false,
    }));
  }

  render() {
    return NewsListComponent({
      ...this.props,
      ...this.state,
      onLoadingPress: this.onLoadingPress.bind(this),
    });
  }
}

const NewsListComponent = ({
  newsList,
  newsCount,
  onNewsPress,
  style,
  onLoadingPress,
  isListLoading,
}) => (
  <View style={[{ flex: 1 }, style]}>
    {console.log(newsList.length)}
    <FlatList
      data={newsList}
      renderItem={({ item }) => (
        <NewsItem newsId={item} onPress={onNewsPress({ newsId: item })} />
      )}
      keyExtractor={news => `News#${news.id}`}
      extraData={newsList.length}
    />
    {!(newsCount && newsList.length < newsCount) || (
      <TouchableOpacity style={styles.loadMore} onPress={onLoadingPress}>
        <Icon
          containerStyle={styles.loadMoreIcon}
          type="material-community"
          name={isListLoading ? 'progress-download' : 'reload'}
          size={12}
        />
        <Text>{isListLoading ? '正在加载相关新闻' : '加载更多相关新闻'}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  loadMore: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  loadMoreIcon: {
    marginRight: 6,
    marginLeft: 1,
  },
});

export default NewsList;
