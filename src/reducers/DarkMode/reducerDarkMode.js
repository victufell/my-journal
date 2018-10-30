import { TOGLEDARKMODE } from './actions'

export const initialState = {
  darkmode: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGLEDARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode
      }

    default:
      return state
  }
}
