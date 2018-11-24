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
    backgroundColor="dodgerblue"
    containerViewStyle={commonStyle.noSideMargins}
    buttonStyle={[buttonStyle.button, loginStyle.socialButton]}
    textStyle={buttonTextStyle.button}
    rightIcon={{
      name: 'md-arrow-round-forward',
      type: 'ionicon',
      color: 'white',
    }}
    title="Twitter"
  />
);

export default WeiboButton;
