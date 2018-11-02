import { UPDATEVALUEINPUT, VALIDATIONINPUT } from './actions'

export const initialState = {
  steps: {
    step: [
      {
        question: 'What would today great',
        response: 3,
        answers: []
      },
      {
        question: 'Second step',
        response: 2,
        answers: []
      },
      {
        question: 'third step',
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
      // console.log(
      //   {
      //     ...state,
      //     steps: {
      //       ...state.steps,
      //       step: [
      //         ...state.steps.step,
              
      //       ]
      //     }
      //   }
        
      // )
      state.steps.step[action.currentstep - 1].answers[action.position - 1] = action.value
    
      return {
        ...state
        
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
