
const initialForgotPasswordState = {
  isRequesting: null,
  error: null,
  result: null,
}

export const StarWarsPeopleReducer = (state = initialForgotPasswordState, action) => {
  const { type, payload } = action;
    switch (type) {
      case 'StarWarsPeopleRequesting':
        return {
          ...state,
          isRequesting: true,
      }
      case 'StarWarsPeopleSuccessData':
        return {
          ...state,
          error: false,
          isRequesting: false,
          result: payload
        }
        
        case 'StarWarsPeopleFailed':
          return {
            ...state,
            error: payload,
            result: null,
            isRequesting: false,
          }

      default: return state;
      }
};