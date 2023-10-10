const initialState = {
  todos: [],
  searchResults: [],
  firstCode: "",
  secondCode: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_FIRST_CODE":
      return { ...state, firstCode: action.payload };
    case "SET_SECOND_CODE":
      return { ...state, secondCode: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
