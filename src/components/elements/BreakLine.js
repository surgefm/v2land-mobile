import React from 'react';
import { View } from 'react-native';
import { paddingConstants } from 'styles';

const BreakLine = ({ style }) => (
  <View
    style={[
      {
        width: '100%',
        height: 1,
        backgroundColor: '#ebebeb',
        marginVertical: paddingConstants.interval + 4,
      },
      style,
    ]}
  />
);

export default BreakLine;
