import React, { Component } from 'react';
import SubscriptionEditorComponent from 'components/subscription/SubscriptionEditor';
import { AlertContext } from 'context/Alert';

export default class SubscriptionEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'appNotification',
      methods: [{
        label: 'App 通知',
        value: 'appNotification',
      }, {
        label: '@ 你的 Twitter 账号',
        value: 'twitterAt',
      }, {
        label: '使用你的 Twitter 账号发推',
        value: 'twitter',
      }, {
        label: '@ 你的微博账号',
        value: 'weiboAt',
      }, {
        label: '使用你的微博账号发贴',
        value: 'weibo',
      }, {
        label: '邮件通知',
        value: 'email',
      }],
      mode: 2,
      modeLabel: '每当有新的进展时提醒我',
    };
  }

  setAlert(alert) {
    this.alert = alert;
  }

  updateMethod(method) {
    this.setState({ ...this.state, method });
  }

  updateMode(mode) {
    const modeNames = [
      '在事件有 30 天没有新消息时提醒我',
      '每周五提醒我',
      '每当有新的进展时提醒我',
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
          updateMethod: this.updateMethod.bind(this),
          updateMode: this.updateMode.bind(this),
          submitSubscriptionRequest: this.submitSubscriptionRequest.bind(this),
          setAlert: this.setAlert(alert),
        })}
      </AlertContext.Consumer>
    );
  }
}
