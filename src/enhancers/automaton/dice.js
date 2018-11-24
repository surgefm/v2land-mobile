import { log } from '../../util';

export default (
  init,
  faces,
  { face = "face", roll = "roll" } = {},
) => ({
  init: {
    [face]: init,
  },
  updaters: {
    [roll]: () => chosenFace => {
      log(
        chosenFace < faces,
        `chosenFace out of range. Expect chosenFace to be 0 <= [value] < ${faces} but receive ${chosenFace}`,
      )
      return { [face]: chosenFace }
    },
  },
})

