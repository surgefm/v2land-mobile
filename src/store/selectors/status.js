const statusSelector = state => state.status || {};
const subscriptionStatusSelector = [
  statusSelector,
  state => state.subscriptions || {},
];

export const isSubscriptionEditing = [
  [
    subscriptionStatusSelector,
    (state, props) => typeof props === 'object' ? props.eventId : props,
  ],
  (state, eventId) => !!state[eventId],
];
