import { UPDATEVALUEINPUT } from './actions'

export const initialState = {
  steps: {
    step: [
      {
        question: 'What would today great',
        response: 3,
        inputs: ['']
      },
      {
        question: 'Second step',
        response: 2,
        inputs: ['']
      },
      {
        question: 'third step',
        response: 1,
        inputs: ['']
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
