import R from 'ramda';
import SearchComponent from '../components/Search.js';
import withNavigationOptions from '../enhancers/withNavigationOptions';

const Search = R.compose(
  withNavigationOptions({
    header: null,
  }),
)(SearchComponent);

export default Search;
