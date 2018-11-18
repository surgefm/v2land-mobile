import R from 'ramda';
import routers from '../config/routers';
import ArticleComponent from '../components/Article.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
  setProp,
} from '../enhancers';

import { fetchEvent } from '../store/actions/events.js';
import { eventSelector } from '../store/selectors/events.js';

const Article = R.compose(
  withNavigationOptions({
    headerTransparent: true,
    headerTintColor: '#fff',
    headerBackTitleStyle: {
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 2,
    },
  }),
  withNavigationHandlers(({ state, navigate, goBack }) => {
    return {
      eventId: state.params.eventId,
      onStackPress: ({ stackId }) => () => navigate(routers.search, { stackId }),
      goBack,
    };
  }),
  connect({
    event: eventSelector,
  }, {
    fetchEvent,
  }),
  setProp('refreshing', false),
  setProp(({ fetchEvent, eventId }) => ({
    key: 'onRefresh',
    value: () => fetchEvent({ eventId }),
  })),
  prepare(({ fetchEvent, eventId }) => fetchEvent({ eventId })),
)(ArticleComponent);

export default Article;
