import React from 'react';
import { Button } from 'react-native-elements';
import {
  commonStyle,
  buttonStyle,
  buttonTextStyle,
  loginStyle,
} from '../../styles';

const WeiboButton = () => (
  <Button
    backgroundColor="rgb(222,82,67)"
    containerViewStyle={commonStyle.noSideMargins}
    buttonStyle={[buttonStyle.button, loginStyle.socialButton]}
    textStyle={buttonTextStyle.button}
    rightIcon={{
      name: 'md-arrow-round-forward',
      type: 'ionicon',
      color: 'white',
    }}
    title="微博"
  />
);

export default WeiboButton;
