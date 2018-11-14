import R from 'ramda';
import React from 'react';
import ArticleComponent from '../components/Article.js';
import { BackButton } from '../components/elements';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
} from '../enhancers';

import { fetchEvent } from '../store/actions/events.js';
import { eventSelector } from '../store/selectors/events.js';

const Article = R.compose(
  withNavigationOptions(({ navigation }) => ({
    headerTransparent: true,
    tintColor: 'transparent',
    headerLeft: (
      <BackButton onPress={() => navigation.goBack()} />
    ),
  })),
  withNavigationHandlers(({ state, goBack }) => {
    return {
      eventId: state.params.eventId,
    };
  }),
  connect({
    event: eventSelector,
  }, {
    fetchEvent,
  }),
  prepare(({ fetchEvent, eventId }) => {
    fetchEvent({ eventId });
  }),
)(ArticleComponent);

export default Article;
