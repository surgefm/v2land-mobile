import { createFactory, Component } from 'react';

const addNavigationListener = (name, handler) => BaseComponent => {
  const factory = createFactory(BaseComponent);
  class AddNavigationListener extends Component {
    componentDidMount() {
      this.handler = this.props.navigation.addListener(
        name,
        handler(this.props),
      );
    }

    componentWillUnmount() {
      this.handler.remove();
    }

    render() {
      return factory(this.props);
    }
  }

  return AddNavigationListener;
};

export default addNavigationListener;
