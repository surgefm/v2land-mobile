import { createFactory } from 'react';

// TODO: Maintain a handlers cache for better performance
const withNavigationHandlers = handlers => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const WithNavigationHandlers = props =>
    factory({
      ...props,
      ...handlers(props.navigation || {}),
    });
  return WithNavigationHandlers;
};

export default withNavigationHandlers;
