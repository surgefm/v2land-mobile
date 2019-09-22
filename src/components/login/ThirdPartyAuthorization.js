import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ThirdPartyAuthorization extends Component {
  componentDidMount() {
    this.props.redirect();
  }

  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>正在加载第三方账号信息</Text>
      </View>
    );
  }
}
