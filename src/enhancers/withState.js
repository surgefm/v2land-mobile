import { createFactory, Component } from 'react'
import { map } from 'ramda';

const toCallable = f => typeof f === 'function' ? f : () => f;

const withState = (...automatons) => BaseComponent => {
  const factory = createFactory(BaseComponent)
  const { init, updaters } = automatons.reduce((acc, cur) => ({
    init: props => ({ ...toCallable(acc.init)(props), ...toCallable(cur.init)(props) }),
    updaters: ({
      ...acc.updaters,
      ...cur.updaters,
    })
  }))

  class WithState extends Component {
    state = init(this.props)

    updaters = map(
      handler => (mayBeEvent, ...args) => {
        // Having that functional form of setState can be called async
        // we need to persist SyntheticEvent
        if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
          mayBeEvent.persist()
        }

        this.setState((state, props) =>
          handler(state, props)(mayBeEvent, ...args)
        )
      },
      updaters
    )

    render() {
      return factory({
        ...this.props,
        ...this.state,
        ...this.updaters,
      })
    }
  }

  return WithState
}

export default withState
