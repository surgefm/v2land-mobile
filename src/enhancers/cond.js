import { createFactory } from "react"
import { id } from '../util';

const cond = (...tuple) => BaseComponent => {
  let factoryCache = {};

  const Cond = props => {
    const index = tuple.findIndex(([check]) => check(props))
    const enhancers = index === -1 ? id : tuple[index][1]
    const factory = factoryCache[index] || createFactory(enhancers(BaseComponent));
    factoryCache[index] = factory;
    return factory(props)
  }

  return Cond
}

export default cond
