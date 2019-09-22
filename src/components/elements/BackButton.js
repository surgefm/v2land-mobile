import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const BackButton = ({onPress, style}) => (
  <View
    style={[
      {
        padding: 6,
        marginLeft: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .6)',
      },
      style,
    ]}>
    <Icon name={'chevron-left'} onPress={onPress} />
  </View>
);

export default BackButton;
