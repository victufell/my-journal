import { UPDATESTEP } from './actions'

export const initialState = {
  currentstep: 1,
  maxstep: 3
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATESTEP:
      return {
        ...state,
        currentstep: state.currentstep === state.maxstep 
                        ? (state.currentstep + 1) - state.maxstep 
                        : state.currentstep + 1
      }

    default:
      return state
  }
}
