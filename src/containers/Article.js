import React from 'react';
import R from 'ramda';
import ArticleComponent from '../components/Article';
import withNavigationOptions from '../enhancers/withNavigationOptions';

const Article = R.compose(
  withNavigationOptions({
    headerTransparent: true,
  }),
)(ArticleComponent);

export default Article;
