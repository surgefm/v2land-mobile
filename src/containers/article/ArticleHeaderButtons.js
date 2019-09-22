import R from 'ramda';
import {ArticleHeaderButtons as ArticleHeaderButtonsComponent} from 'components/article';
import {connect} from 'enhancers';
import {beginSubscriptionEditing} from 'store/actions/status';

const ArticleHeaderButtons = R.compose(connect({}, {beginSubscriptionEditing}))(
  ArticleHeaderButtonsComponent,
);

export default ArticleHeaderButtons;
