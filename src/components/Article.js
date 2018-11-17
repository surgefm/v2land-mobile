import { Component } from 'react';
import ArticleComponent from './article/Article';
import { DropDownHolder } from '../App';

let _this;

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    _this = this;
  }

  async onRefresh() {
    _this.setState(() => ({ refreshing: true }));
    const { fetchEvent, eventId } = _this.props;
    await fetchEvent({ eventId });
    _this.setState(() => ({ refreshing: false }));
    DropDownHolder.alert('info', '刷新成功', '成功加载该事件的最新信息');
  }

  render() {
    return ArticleComponent({
      ...this.props,
      refreshing: this.state.refreshing,
      onRefresh: this.onRefresh,
    });
  }
}
