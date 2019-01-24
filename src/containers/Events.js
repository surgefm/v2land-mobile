import R from 'ramda';
import routers from '../config/routers';

import EventsComponent from '../components/Events.js';

import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  prepare,
} from '../enhancers';

import { fetchEventList } from '../store/actions/events.js';
import { eventListSelector } from '../store/selectors/events.js';

const Events = R.compose(
  withNavigationOptions({
    title: '浪潮',
    header: null,
    headerBackTitle: null,
  }),
  withNavigationHandlers(({ navigate }) => ({
    onEventPress: event => () => navigate(routers.event, {
      eventId: event.id,
      title: event.name,
      hadHeaderImage: !!event.headerImage,
    }),
  })),
  connect(
    {
      eventList: eventListSelector,
    },
    {
      fetchEventList,
    },
  ),
  prepare(({ fetchEventList }) => fetchEventList()),
)(EventsComponent);

export default Events;
