import { lensPath, over } from 'ramda';
import box from './box.js';
import { log } from '../../util';

const invaraintString = (s, ...msg) => __DEV__ && (typeof s !== 'string') && log(...msg)

export default (initialValue, names) => {
  invaraintString(initialValue, `Invalid type of initialValue for stringBox. Expect string but get ${typeof initialValue} instead.`)

  return over(
    lensPath(['updaters', names && names.fill || 'fill']),
    fillFn => (...args) => (b) => {
      invaraintString(b, `Invalid type of filled value for stringBox. Expect string but get ${typeof b} instead.`)
      return fillFn(...args)(b);
    },
    box(initialValue, names)
  );
}
