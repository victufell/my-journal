import {} from './actions'

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
  }
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
