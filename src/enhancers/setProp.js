import {createFactory} from 'react';
import _ from 'lodash';

const setProp = (key, value) => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const WithProp = props => {
    if (_.isFunction(key) && _.isUndefined(value)) {
      const actual = key(props);
      key = actual.key;
      value = actual.value;
    }

    return factory({
      ...props,
      [key]: value,
    });
  };
  return WithProp;
};

export default setProp;
