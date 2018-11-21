import { Component } from 'react';
import { Animated } from 'react-native';
import ArticleComponent from './article/Article';
import DropDownHolder from '../plugins/DropDownHolder';

export const scrollRangeForAnimation = 100;

export const onScroll = Animated.event(
  [
    {
      nativeEvent: { contentOffset: { y: new Animated.Value(0) } },
    },
  ],
  {
    useNativeDriver: true,
  }
);

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.props.navigation.setParams({
      ...this.props.navigation.state,
      event: this.props.event,
    });
  }

  async onRefresh() {
    this.setState(() => ({ refreshing: true }));
    const { fetchEvent, eventId } = this.props;
    await fetchEvent({ eventId });
    this.setState(() => ({ refreshing: false }));
    DropDownHolder.alert('info', '刷新成功', this.refreshInfo());
  }

  refreshInfo() {
    const { event } = this.props;
    return (typeof event.updateStat === 'undefined' || event.updateStat.stack === 0)
      ? '成功加载该事件的最新信息'
      : `成功加载 ${event.updateStat.stack} 个新进展`;
  }

  onScrollEndSnapToEdge(event) {
    const y = event.nativeEvent.contentOffset.y;
    const shade = Math.min((y - 100) / 100, 1);
    const tintColorElement = Math.floor((1 - shade) * 256);
    const tintColor = `${tintColorElement}, ${tintColorElement}, ${tintColorElement}`;
    this.props.navigation.setParams({
      ...this.props.navigation.state,
      headerShade: shade,
      headerTitle: this.props.event.name,
      headerTitleColor: `rgba(${tintColor}, ${shade})`,
      headerBackgroundColor: `rgba(256, 256, 256, ${shade})`,
      headerTintColor: `rgb(${tintColor})`,
    });
  }

  render() {
    return ArticleComponent({
      ...this.props,
      refreshing: this.state.refreshing,
      onRefresh: this.onRefresh.bind(this),
      onScroll: this.onScrollEndSnapToEdge.bind(this),
      onScrollEndSnapToEdge: this.onScrollEndSnapToEdge.bind(this),
    });
  }
}
