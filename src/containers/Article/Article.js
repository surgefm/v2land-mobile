import React from 'react';
import ArticleComponent from '../../components/Article.js';
import ArticleHeaderButtons from './ArticleHeaderButtons';

import R from 'ramda';
import routers from '../../config/routers';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
} from '../../enhancers';

import { fetchEvent } from '../../store/actions/events.js';
import { eventSelector } from '../../store/selectors/events.js';

const Article = R.compose(
  withNavigationOptions(({ navigation: { state: { params } } }) => ({
    headerTransparent: params.hadHeaderImage,
    headerTintColor: params.hadHeaderImage
      ? (params.headerTintColor || '#fff')
      : 'rgb(0, 131, 168)',
    headerBackgroundTransitionPreset: 'fade',
    headerTitle: params.title,
    headerTitleStyle: {
      color: params.hadHeaderImage
        ? (params.headerTitleColor || 'transparent')
        : '#000',
    },
    headerBackTitle: '事件',
    headerLeftContainerStyle: {
      paddingLeft: 10,
    },
    headerStyle: {
      backgroundColor: params.hadHeaderImage
        ? (params.headerBackgroundColor || 'rgba(256, 256, 256, 0)')
        : 'rgb(256, 256, 256)',
      borderBottomWidth: 1,
      borderBottomColor: `rgba(174, 174, 174, ${params.headerShade || 0})`,
    },
    headerRight: (
      <ArticleHeaderButtons
        event={params.event}
        color={
          params.hadHeaderImage
            ? (params.headerTintColor || '#fff')
            : 'rgb(0, 131, 168)'
        }
      />
    ),
  })),
  withNavigationHandlers(({ state, navigate, goBack }) => {
    return {
      eventId: state.params.eventId,
      onStackPress: ({ stackId }) => () =>
        navigate(routers.search, { eventId, stackId }),
      onNewsPress: ({ eventId, stackId, newsId }) => () =>
        navigate(routers.news, { eventId, stackId, newsId }),
      goBack,
    };
  }),
  connect(
    {
      event: eventSelector,
    },
    {
      fetchEvent,
    },
  ),
  prepare(({ fetchEvent, eventId }) => fetchEvent({ eventId })),
)(ArticleComponent);

export default Article;
