import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { Text, Card } from 'react-native-elements';

const EventItem = ({
  name,
  description,
  imageUrl,
  source,
  sourceUrl,
}) => (
  <TouchableNativeFeedback
    useForeground
  >
    <Card
      featuredTitle={name}
      image={{ uri: imageUrl }}
    >
      <Text>{description || ''}</Text>
    </Card>
  </TouchableNativeFeedback>
)

export default EventItem;
