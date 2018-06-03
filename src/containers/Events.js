import React from 'react';
import R from 'ramda';
import EventsComponent from '../components/Events';
import withNavigationOptions from '../enhancers/withNavigationOptions';

const Events = R.compose(
  withNavigationOptions({
    title: '浪潮',
  })
)(EventsComponent);

export default Events;
