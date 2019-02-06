import React, { Component } from 'react';
import { Linking } from 'react-native';
import { WebBrowser } from 'expo';
import NewsComponent from './news/News';
import { log } from '../util';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setParams({
      ...this.props.navigation.state,
      news: this.props.news,
    });
  }

  onButtonPress() {
    Linking.canOpenURL(this.props.news.url).then(supported => {
      if (supported) {
        WebBrowser.openBrowserAsync(this.props.news.url);
      } else {
        log('Don\'t know how to open URI: ' + this.props.news.url);
      }
    });
  }

  render() {
    return (
      <NewsComponent
        {...this.props}
        onButtonPress={this.onButtonPress.bind(this)}
      />
    );
  }
}
