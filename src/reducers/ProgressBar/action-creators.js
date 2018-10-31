import { UPDATESTEP, RESETSTEP } from './actions'

export const updateStep = value => {
  return {
    type: UPDATESTEP,
    value
  }
}

export const resetStep = () => {
  return {
    type: RESETSTEP
  }
}
