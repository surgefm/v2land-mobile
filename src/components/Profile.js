import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { pageStyle, paddings } from '../styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const { goLogin } = props;
    goLogin();
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={[pageStyle.background, paddings.pageTop]}
        >
        </ScrollView>
      </SafeAreaView>
    );
  }
}
