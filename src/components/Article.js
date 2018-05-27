import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Card, Text } from 'react-native-elements';

const Article = ({
  title,
  description,
  createdAt,
  updatedAt,
}) => (
  <TouchableNativeFeedback
    useForeground
  >
    <Card
      featuredTitle={title}
    >

    </Card>
  </TouchableNativeFeedback>
);

export default Article;
