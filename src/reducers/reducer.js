const initialState = {
  petOwner: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PET_OWNER':
      return {
        ...state,
        petOwner: action.payload,
      }

    case 'SET_PET':
      return {
        ...state,
        pet: action.payload,
      }

    default:
      return state
  }
}

export default rootReducer
