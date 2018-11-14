import R from 'ramda';
import routers from '../config/routers';

import EventsComponent from '../components/Events.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
} from '../enhancers';

import { fetchList } from '../store/actions/events.js';
import { eventListSelector } from '../store/selectors/events.js';

const Events = R.compose(
  withNavigationOptions({
    title: '浪潮',
    header: null,
  }),
  withNavigationHandlers(({ navigate }) => ({
    onEventPress: (eventId) => () => navigate(routers.event, { eventId }),
  })),
  connect({
    eventList: eventListSelector,
  }, {
    fetchList,
  }),
  prepare(({ fetchList }) => fetchList()),
)(EventsComponent);

export default Events;
