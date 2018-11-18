import R from 'ramda';
import routers from '../config/routers';
import ArticleComponent from '../components/Article.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
} from '../enhancers';

import { fetchEvent } from '../store/actions/events.js';
import { eventSelector } from '../store/selectors/events.js';

const Article = R.compose(
  withNavigationOptions(({ navigation: { state: { params } } }) => ({
    headerTransparent: true,
    headerTintColor: params.headerTintColor || '#fff',
    headerBackgroundTransitionPreset: 'fade',
    headerTitle: params.headerTitle,
    headerTitleStyle: {
      color: params.headerTitleColor,
    },
    headerStyle: {
      backgroundColor: params.headerBackgroundColor || 'rgba(256, 256, 256, 0)',
    },
  })),
  withNavigationHandlers(({ state, navigate, goBack }) => {
    return {
      eventId: state.params.eventId,
      onStackPress: ({ stackId }) => () => navigate(routers.search, { stackId }),
      onNewsPress: ({ newsId }) => () => navigate(routers.news, { newsId }),
      goBack,
    };
  }),
  connect({
    event: eventSelector,
  }, {
    fetchEvent,
  }),
  prepare(({ fetchEvent, eventId }) => fetchEvent({ eventId })),
)(ArticleComponent);

export default Article;
