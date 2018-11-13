import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

const widthOfMargin = Dimensions.get('window').width * 0.75;

const onButtonPress = () => {
  Alert.alert('weibo');
};

export default class ImageButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={onButtonPress} activeOpacity={0.2} focusedOpacity={0.5}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
          <Image
            source={require('./image/weibo.png')}
            style={{ resizeMode: 'contain', width: widthOfMargin }} />
        </View>
      </TouchableOpacity>
    );
  }
}
