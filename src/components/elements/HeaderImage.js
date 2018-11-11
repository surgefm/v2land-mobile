import React from 'react';
import { View, Image } from 'react-native';

const HeaderImage = ({ headerImage, event = {} }) => {
  if (headerImage && headerImage.imageUrl) {
    return (
      <Image
        style={{ width: '100%', height: '60' }}
        source={{ uri: headerImage.imageUrl }} />
    );
  } else {
    return <View />;
  }
};

export default HeaderImage;
