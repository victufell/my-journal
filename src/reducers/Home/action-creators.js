import { UPDATEVALUEINPUT } from './actions'

export const updateValueInput = (value) => {
  return {
    type: UPDATEVALUEINPUT,
    value
  }
}