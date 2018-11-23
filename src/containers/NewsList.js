import R from 'ramda';
import NewsListComponent from '../components/news/NewsList';
import { connect } from '../enhancers';
import { fetchNewsList } from '../store/actions/news.js';

const NewsList = R.compose(
  connect(null, {
    fetchNewsList,
  }),
)(NewsListComponent);

export default NewsList;
