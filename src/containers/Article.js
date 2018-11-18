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
  withNavigationOptions({
    header: null,
  }),
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
