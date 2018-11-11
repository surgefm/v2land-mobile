import React from 'react';
import { SafeAreaView } from 'react-native';
import { HeaderImage } from './elements';

const Article = ({ event }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <HeaderImage event={event} />
  </SafeAreaView>
);

export default Article;
