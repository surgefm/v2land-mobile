import { createFactory, Component } from 'react'
import { map } from 'ramda';

const withState = ({ init, updaters }) => BaseComponent => {
  const factory = createFactory(BaseComponent)

  class WithState extends Component {
    state = typeof init === 'function'
      ? init(this.props)
      : init

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
