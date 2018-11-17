import React from 'react';
import { Button } from 'react-native-elements';
import { buttonStyle, buttonTextStyle, loginStyle } from '../../styles';

const WeiboButton = () => (
  <Button
    backgroundColor='dodgerblue'
    buttonStyle={[buttonStyle.button, loginStyle.socialButton]}
    textStyle={buttonTextStyle.button}
    rightIcon={{ name: 'md-arrow-round-forward', type: 'ionicon', color: 'white' }}
    title='Twitter' />
);

export default WeiboButton;
