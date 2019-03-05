import R from 'ramda';
import SearchComponent from '../components/Search.js';
import {
  withNavigationOptions,
  withNavigationHandlers,
  connect,
  withProps,
  withState,
  automaton,
} from '../enhancers';

import routers from '../config/routers';

import { search } from '../store/actions/search';
import { searchResultSelector } from '../store/selectors/search';

const Search = R.compose(
  withNavigationOptions({
    header: null,
  }),
  withNavigationHandlers(({ setParams, navigate }) => ({
    setParams,
    goToEvent(event) {
      navigate(routers.event, {
        eventId: event.id,
        title: event.name,
        hadHeaderImage: !!event.headerImage,
      });
    },
  })),
  connect(
    {
      searchResults: searchResultSelector,
    },
    {
      search,
    }
  ),
  withState(
    automaton.stringBox('', { box: 'keyword', fill: 'setKeyword' }),
    automaton.coin(false, { side: 'isSearching' }),
  ),
  withProps(({ search, keyword, setKeyword, setParams }) => ({
    onInputChange(newKeyword) {
      setKeyword(newKeyword);
      setParams({ keyword: newKeyword });
      if (keyword) {
        search(keyword);
      }
    },
    onClear() {
      setKeyword('');
    },
  })),
)(SearchComponent);

export default Search;
