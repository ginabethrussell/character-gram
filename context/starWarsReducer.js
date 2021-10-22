export const ADD_PROFILES = "ADD_PROFILES"
export const ADD_NAMES = "ADD_NAMES"

export const initialState = {
  profiles: [],
  names: [],
}

export const addProfiles = (profiles) => ({
  type: ADD_PROFILES,
  payload: profiles,
});

export const addNames = (names) => ({
  type: ADD_NAMES,
  payload: names,
});

export const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILES:
      return {
        ...state,
        profiles: action.payload
      }
    case ADD_NAMES:
      return {
        ...state,
        names: action.payload
      }
  }
}