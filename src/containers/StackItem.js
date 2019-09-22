import R from 'ramda';
import StackItemComponent from 'components/stacks/StackItem';
import {connect} from 'enhancers';
import {stackSelector} from 'store/selectors/stacks';

const StackItem = R.compose(
  connect({
    stack: stackSelector,
  }),
)(StackItemComponent);

export default StackItem;
