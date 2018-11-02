import { UPDATEVALUEINPUT, VALIDATIONINPUT } from './actions'

export const updateValueInput = (value, position, currentstep) => {
  return {
    type: UPDATEVALUEINPUT,
    value,
    position,
    currentstep
  }
}

export const validationInput = condition => {
  return {
    type: VALIDATIONINPUT,
    condition
  }
}
