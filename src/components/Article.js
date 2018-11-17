import { Component } from 'react';
import ArticleComponent from './article/Article';

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
  }

  render() {
    return ArticleComponent({
      ...this.props,
      refreshing: this.state.refreshing,
      onRefresh: this.onRefresh,
    });
  }
}
