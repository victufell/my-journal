import { } from './actions'

export const initialState = {
  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state
      }

    default:
      return state
  }
}