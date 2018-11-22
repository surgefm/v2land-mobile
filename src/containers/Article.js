import React from 'react';
import ArticleComponent from '../components/Article.js';
import { ArticleHeaderButtons } from '../components/article';

import R from 'ramda';
import routers from '../config/routers';

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
    headerBackTitle: null,
    headerLeftContainerStyle: {
      paddingLeft: 10,
    },
    headerStyle: {
      backgroundColor: params.headerBackgroundColor || 'rgba(256, 256, 256, 0)',
      borderBottomWidth: 1,
      borderBottomColor: `rgba(174, 174, 174, ${params.headerShade || 0})`,
    },
    headerRight: (
      <ArticleHeaderButtons
        event={params.event}
        color={params.headerTintColor} />
    ),
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
