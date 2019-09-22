import React, {Component} from 'react';
import {Animated} from 'react-native';
import EventsComponent from 'components/events/Events';
import {AlertContext} from 'context/Alert';

export const scrollRangeForAnimation = 100;

export const onScroll = Animated.event(
  [
    {
      nativeEvent: {contentOffset: {y: new Animated.Value(0)}},
    },
  ],
  {
    useNativeDriver: true,
  },
);

export default class Article extends Component {
  static contextType = AlertContext;

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  async onRefresh() {
    this.setState(() => ({refreshing: true}));
    const {fetchEventList} = this.props;
    await fetchEventList();
    this.setState(() => ({refreshing: false}));
    this.alert('info', '刷新成功', '成功加载最新事件');
  }

  setAlert(alert) {
    this.alert = alert;
  }

  render() {
    return (
      <AlertContext.Consumer>
        {alert =>
          EventsComponent({
            ...this.props,
            setAlert: this.setAlert(alert),
            refreshing: this.state.refreshing,
            onRefresh: this.onRefresh.bind(this),
          })
        }
      </AlertContext.Consumer>
    );
  }
}
