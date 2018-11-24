import { connect as connect_ } from 'react-redux';
import createSelector from 're-select';

const normalizeActions = actions => {
  for (const k of Object.keys(actions)) {
    actions[k] = actions[k].make;
  }
  return actions;
};

const connect = (selector = null, actions = null, ...args) =>
  connect_(
    selector === null ? selector : createSelector(selector),
    actions === null ? actions : normalizeActions(actions),
    ...args,
  );

export default connect;
