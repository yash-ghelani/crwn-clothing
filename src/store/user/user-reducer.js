import { USER_ACTION_TYPES } from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      // all actions are dispatched to all reducers
      // the default return should be the unchanged state
      return state;
  }
};
