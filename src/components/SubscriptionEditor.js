import React, { Component } from 'react';
import SubscriptionEditorComponent from './subscription/SubscriptionEditor';
import { AlertContext } from '../context/Alert';

export default class SubscriptionEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 0,
      mode: 3,
      modeLabel: '每当有新的进展时提醒我',
    };
  }

  setAlert(alert) {
    this.alert = alert;
  }

  updateMode(mode) {
    const modeNames = [
      '在事件有一年没有新消息时提醒我',
      '在事件有 30 天没有新消息时提醒我',
      '每周五提醒我',
      '每当有新的进展时提醒我',
      '每当有新的新闻时提醒我',
    ];

    this.setState({
      ...this.state,
      mode,
      modeLabel: modeNames[mode],
    });
  }

  submitSubscriptionRequest() {
    this.alert('success', '关注成功', '我们会根据你的设定向你推送通知');
    this.props.endSubscriptionEditing({ eventId: this.props.eventId });
  }

  render() {
    return (
      <AlertContext.Consumer>
        {alert => SubscriptionEditorComponent({
          ...this.props,
          ...this.state,
          updateMode: this.updateMode.bind(this),
          submitSubscriptionRequest: this.submitSubscriptionRequest.bind(this),
          setAlert: this.setAlert(alert),
        })}
      </AlertContext.Consumer>
    );
  }
}
