const R = require('ramda')
import { UPDATEVALUEINPUT, VALIDATIONINPUT } from './actions'

export const initialState = {
  steps: {
    step: [
      {
        question: 'First Step',
        response: 3,
        answers: []
      },
      {
        question: 'Second Step',
        response: 2,
        answers: []
      },
      {
        question: 'Third Step',
        response: 1,
        answers: []
      }
    ]
  },
  isValid: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATEVALUEINPUT:
      const newState = R.assocPath(
        [
          'steps',
          'step',
          action.currentstep - 1,
          'answers',
          action.position - 1
        ],
        action.value,
        state
      )
      return {
        ...newState
      }

    case VALIDATIONINPUT:
      return {
        ...state,
        isValid: action.condition
      }

    default:
      return state
  }
}
