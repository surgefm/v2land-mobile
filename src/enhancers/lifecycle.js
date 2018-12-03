import { createFactory, Component } from 'react';

const lifecycle = spec => BaseComponent => {
  const factory = createFactory(BaseComponent);

  class Lifecycle extends Component {
    render() {
      return factory({
        ...this.props,
        ...this.state,
      });
    }
  }

  Object.keys(spec).forEach(hook => (Lifecycle.prototype[hook] = spec[hook]));

  return Lifecycle;
};

export default lifecycle;
