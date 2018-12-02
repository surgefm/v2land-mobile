import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Text, Button } from 'react-native';
import { pageStyle, paddings } from '../styles';

export default class Profile extends Component {
  render() {
    const { logout } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text>
          Signed In!
        </Text>
        <Button onClick={logout} title="Logout!"/>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={[pageStyle.background, paddings.pageTop]}
        />
      </SafeAreaView>
    );
  }
}
