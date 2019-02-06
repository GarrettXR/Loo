const initialState = {
    currentListing: {}
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'GET_LISTING':
        return {...state, currentListing: action.establishment}
      }
        return state
    }
  