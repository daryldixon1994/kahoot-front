const initialState = {
  students: [],
};

const kahootReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_STUDENTS":
      return {
        ...state,
        students: payload,
      };
    default:
      return state;
  }
};

export default kahootReducer;
