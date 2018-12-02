import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { pageStyle, paddings } from '../styles';

export default class Profile extends Component {
  render() {
    const { logout } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>
          Signed In!
        </Text>
        <TouchableOpacity onPress={logout}>
          <Text>+++++++++++++++++++++++++++</Text>
          <Text>+         Logout!         +</Text>
          <Text>+++++++++++++++++++++++++++</Text>
        </TouchableOpacity>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={[pageStyle.background, paddings.pageTop]}
        />
      </SafeAreaView>
    );
  }
}
