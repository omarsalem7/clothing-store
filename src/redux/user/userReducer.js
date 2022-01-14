const initializeState = {
  currentUser: null,
};
const userReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
