import R from 'ramda';
import NewsItemComponent from 'components/news/NewsItem';
import {connect} from 'enhancers';
import {newsSelector} from 'store/selectors/news';

const NewsItem = R.compose(
  connect({
    news: newsSelector,
  }),
)(NewsItemComponent);

export default NewsItem;
