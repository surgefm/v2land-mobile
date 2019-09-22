import R from 'ramda';
import SubscriptionEditorComponent from 'components/SubscriptionEditor';
import {connect} from 'enhancers';
import {
  beginSubscriptionEditing,
  endSubscriptionEditing,
} from 'store/actions/status';
import {isSubscriptionEditing} from 'store/selectors/status';

const SubscriptionEditor = R.compose(
  connect(
    {
      isVisible: isSubscriptionEditing,
    },
    {
      beginSubscriptionEditing,
      endSubscriptionEditing,
    },
  ),
)(SubscriptionEditorComponent);

export default SubscriptionEditor;
