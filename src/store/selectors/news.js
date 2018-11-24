export const newsStateSelector = state => state.news.data;

export const newsIdSelector = (state, props) =>
  typeof props === 'number' ? props : props.newsId;

export const newsSelector = [
  [newsStateSelector, newsIdSelector],
  (state, newsId) => state[newsId],
];
