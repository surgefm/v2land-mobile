import { createFactory, Component } from 'react';

const prepare = func => BaseComponent => {
  const factory = createFactory(BaseComponent);

  class Prepare extends Component {
    componentDidMount() {
      func(this.props);
    }

    render() {
      return factory(this.props);
    }
  }

  return Prepare;
}

export default prepare;
