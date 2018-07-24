import React from 'react';
import R from 'ramda';
import EventsComponent from '../components/Events';
import withNavigationOptions from '../enhancers/withNavigationOptions';
import withNavigationHandlers from '../enhancers/withNavigationHandlers';
import routers from '../config/routers';

const Events = R.compose(
  withNavigationOptions({
    title: '浪潮',
    header: null,
  }),
  withNavigationHandlers(({ navigate }) => ({
    onEventPress: () => navigate(routers.event),
  })),
)(EventsComponent);

export default Events;
