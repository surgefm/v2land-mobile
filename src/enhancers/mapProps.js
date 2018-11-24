import { createFactory } from "react"
import { compose } from "ramda"

const mapProps = mapper => BaseComponent => {
  const factory = createFactory(BaseComponent)

  const MapProps = compose(
    factory,
    mapper,
  )

  return MapProps
}

export default mapProps
