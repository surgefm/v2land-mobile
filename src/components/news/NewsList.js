import React from 'react';
import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({ newsList, onNewsPress, style }) => (
  <FlatList
    data={newsList}
    style={style}
    renderItem={({ item }) => <NewsItem
      news={item}
      onPress={onNewsPress({ newsId: item.id })} /> }
    keyExtractor={news => `News#${news.id}`}
    extraData={newsList}
  />
);

export default NewsList;
