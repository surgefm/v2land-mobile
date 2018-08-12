import R from 'ramda';

const createType = name => name.split(' ').map(s => s.toUpperCase()).join('_');

const createAction = (name, input = R.identity) => {
  const type = createType(name);

  return {
    type,
    make: (...args) => ({
      type,
      payload: input(...args),
    }),
  };
};

export default createAction;
