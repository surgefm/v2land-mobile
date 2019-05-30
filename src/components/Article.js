import React, { Component } from 'react';
import { Animated } from 'react-native';
import ArticleComponent from 'components/article/Article';
import { AlertContext } from 'context/Alert';

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
  static contextType = AlertContext;

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      statusBarStyle: this.props.hadHeaderImage
        ? 'light-content'
        : 'dark-content',
    };

    this.props.navigation.setParams({
      ...this.props.navigation.state,
      event: this.props.event,
    });

    this.fetchEvent();
  }

  async fetchEvent() {
    await this.props.fetchEvent({ eventId: this.props.eventId });
    this.onScrollEndSnapToEdge();
  }

  async onRefresh() {
    this.setState((state) => ({ ...state, refreshing: true }));
    const { fetchEvent, eventId } = this.props;
    await fetchEvent({ eventId });
    this.setState((state) => ({ ...state, refreshing: false }));
    this.alert('info', '刷新成功', this.refreshInfo());
  }

  setAlert(alert) {
    this.alert = alert;
  }

  refreshInfo() {
    const { event } = this.props;
    return typeof event.updateStat === 'undefined' ||
      event.updateStat.stack === 0
      ? '成功加载该事件的最新信息'
      : `成功加载 ${event.updateStat.stack} 个新进展`;
  }

  onScrollEndSnapToEdge(event) {
    if (!this.props.event.headerImage) return;
    const y = event ? event.nativeEvent.contentOffset.y : 0;
    this.setState((state) => ({
      ...state,
      statusBarStyle: y >= 150 ? 'dark-content' : 'light-content',
    }));
    const shade = Math.min((y - 100) / 100, 1);
    const tintColorElement = Math.floor((1 - shade) * 256);
    const tintColor = `${tintColorElement}, ${256 - 125 * shade}, ${256 -
      88 * shade}`;
    const titleColor = `${tintColorElement}, ${tintColorElement}, ${tintColorElement}`;
    this.props.navigation.setParams({
      ...this.props.navigation.state,
      hadHeaderImage: this.props.event.headerImage,
      title: this.props.event.name,
      headerShade: shade,
      headerTitle: this.props.event.name,
      headerTitleColor: `rgba(${titleColor}, ${shade})`,
      headerBackgroundColor: `rgba(256, 256, 256, ${shade})`,
      headerTintColor: `rgb(${tintColor})`,
    });
  }

  render() {
    return (
      <AlertContext.Consumer>
        {alert => ArticleComponent({
          ...this.props,
          setAlert: this.setAlert(alert),
          refreshing: this.state.refreshing,
          statusBarStyle: this.state.statusBarStyle,
          onRefresh: this.onRefresh.bind(this),
          onScroll: this.onScrollEndSnapToEdge.bind(this),
          onScrollEndSnapToEdge: this.onScrollEndSnapToEdge.bind(this),
        })}
      </AlertContext.Consumer>
    );
  }
}
