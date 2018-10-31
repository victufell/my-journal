import { UPDATESTEP, RESETSTEP } from './actions'

export const updateStep = () => {
  return {
    type: UPDATESTEP
  }
}

export const resetStep = () => {
  return {
    type: RESETSTEP
  }
}