import { UPDATESTEP, RESETSTEP } from './actions'

export const initialState = {
  currentstep: 1,
  maxstep: 3
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATESTEP:
      return {
        ...state,
        currentstep: state.currentstep + action.value
      }

    case RESETSTEP:
      return {
        ...state,
        currentstep: initialState.currentstep
      }

    default:
      return state
  }
}
