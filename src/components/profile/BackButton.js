import React, { Component } from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('click');
};

export default class ImageButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={onButtonPress} activeOpacity={0.2} focusedOpacity={0.5}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 100,
          backgroundColor: '#FFFFFF',
        }}>
          <Image source={require('./image/back.png')} />
        </View>
      </TouchableOpacity>
    );
  }
}
