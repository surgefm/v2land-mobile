import React from 'react';
import { View } from 'react-native';
import getAssetURL from 'util/getAssetURL';
import FadeIn from 'react-native-fade-in-image';
import { CachedImage } from 'react-native-cached-image';

const HeaderImage = ({ headerImage, style }) => {
  if (headerImage && headerImage.imageUrl) {
    return (
      <FadeIn placeholderStyle={{ backgroundColor: 'rgb(243, 249, 251)' }}>
        <CachedImage
          style={[{
            width: '100%',
            height: 300,
          }, style]}
          source={{ uri: getAssetURL(headerImage.imageUrl) }}
        />
      </FadeIn>
    );
  } else {
    return <View />;
  }
};

export default HeaderImage;
