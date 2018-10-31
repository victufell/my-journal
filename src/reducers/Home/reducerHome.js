import { UPDATEVALUEINPUT } from './actions'

export const initialState = {
  steps: {
    step: [
      {
        question: 'What would today great',
        response: 3
      },
      {
        question: 'Second step',
        response: 3
      },
      {
        question: 'third step',
        response: 3
      }
    ]
  },
  value: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATEVALUEINPUT:
      return {
        ...state,
        value: action.value
      }

    default:
      return state
  }
}
