import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { loginStyle } from '../../styles';

export default class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput style={loginStyle.TextInput}
        placeholder={this.props.name}
        onChangeText={
          (text) => {
            this.setState({ text });
            this.props.onChangeText(text);
          }
        }
      />
    );
  }
}
