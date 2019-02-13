import { Component } from 'react';
import { Animated } from 'react-native';
import EventsComponent from './events/Events';

export const scrollRangeForAnimation = 100;

export const onScroll = Animated.event(
  [
    {
      nativeEvent: { contentOffset: { y: new Animated.Value(0) } },
    },
  ],
  {
    useNativeDriver: true,
  },
);

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  async onRefresh() {
    this.setState(() => ({ refreshing: true }));
    const { fetchEventList } = this.props;
    await fetchEventList();
    this.setState(() => ({ refreshing: false }));
    this.props.showNotification({
      title: '刷新成功',
      message: '成功加载最新事件',
      vibrate: 'false',
      backgroundColor: '#fff',
    });
  }

  render() {
    return EventsComponent({
      ...this.props,
      refreshing: this.state.refreshing,
      onRefresh: this.onRefresh.bind(this),
    });
  }
}
