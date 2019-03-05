const searchSelector = store => store.search;

export const searchResultSelector = [
  [searchSelector, (state, props) => {
    if (!props.navigation.state.params) return;
    return props.navigation.state.params.keyword;
  }],
  [searches => searches.data || {}, (searches, keyword) => keyword],
  (searches, keyword) => searches[keyword],
  (searches = {}) => (searches.results || {}).events,
  (results = {}) => results.hits || [],
];
