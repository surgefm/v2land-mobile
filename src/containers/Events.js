import React from 'react';
import R from 'ramda';
import routers from '../config/routers';

import EventsComponent from '../components/Events';

import withNavigationOptions from '../enhancers/withNavigationOptions';
import withNavigationHandlers from '../enhancers/withNavigationHandlers';
import prepare from '../enhancers/prepare';
import connect from '../enhancers/connect.js';

import { fetchList } from '../store/actions/events.js';

import { eventListSelector } from '../store/selectors/events.js';

const Events = R.compose(
  withNavigationOptions({
    title: '浪潮',
    header: null,
  }),
  withNavigationHandlers(({ navigate }) => ({
    onEventPress: () => navigate(routers.event),
  })),

  connect({
    eventList: eventListSelector,
  }, {
    fetchList,
  }),

  prepare(({ fetchList }) => fetchList()),
)(EventsComponent);

export default Events;
