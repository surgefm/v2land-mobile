import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { pageStyle, paddings } from '../styles';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>
          Signed In!
        </Text>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={[pageStyle.background, paddings.pageTop]}
        />
      </SafeAreaView>
    );
  }
}
