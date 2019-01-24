import React from 'react';
import { View, Image } from 'react-native';
import getAssetURL from '../../util/getAssetURL';

const HeaderImage = ({ headerImage, style }) => {
  if (headerImage && headerImage.imageUrl) {
    return (
      <Image
        style={[{
          width: '100%',
          height: 300,
          backgroundColor: 'rgba(0, 131, 168, 0.05)',
        }, style]}
        source={{ uri: getAssetURL(headerImage.imageUrl) }}
      />
    );
  } else {
    return <View />;
  }
};

export default HeaderImage;
