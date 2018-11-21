import NewsComponent from '../components/News.js';
import { colors } from '../styles';

import R from 'ramda';
import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
} from '../enhancers';

import { newsSelector } from '../store/selectors/news';

const News = R.compose(
  withNavigationOptions(({ navigation: { state: { params } } }) => ({
    headerTitle: '新闻',
    headerTintColor: colors.theme,
    headerTitleStyle: { color: '#000' },
  })),
  withNavigationHandlers(({ state }) => {
    return {
      eventId: state.params.eventId,
      stackId: state.params.stackId,
      newsId: state.params.newsId,
    };
  }),
  connect({
    news: newsSelector,
  }),
)(NewsComponent);

export default News;
