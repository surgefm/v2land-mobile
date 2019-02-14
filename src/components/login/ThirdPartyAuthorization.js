import React, { Component } from 'react';
import { View } from 'react-native';

export default class ThirdPartyAuthorization extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.redirect();
  }

  render() {
    return (<View />);
  }
}
