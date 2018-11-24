import mapProps from "./mapProps.js"

const withProps = mapper => BaseComponent => {
  const WithProps = mapProps(
    typeof mapper == "function"
      ? props => Object.assign({}, props, mapper(props))
      : props => ({ ...props, ...mapper }),
  )(BaseComponent)

  return WithProps;
}

export default withProps
