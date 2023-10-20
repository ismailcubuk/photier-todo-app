const initialState = {
  todos: [],
  searchResults: [],
  deleteResults: [],
  firstCode: "",
  secondCode: "",
  lastCode: "",
  finalCode: "",
  deleteQuery: "",
  searchQuery: "",
  zipFile: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_DELETE_RESULTS":
      return { ...state, deleteResults: action.payload };
    case "SET_FIRST_CODE":
      return { ...state, firstCode: action.payload };
    case "SET_SECOND_CODE":
      return { ...state, secondCode: action.payload };
    case "SET_LAST_CODE":
      return { ...state, lastCode: action.payload };
    case "SET_FINAL_CODE":
      return { ...state, finalCode: action.payload };
    case "SET_DELETE_QUERY":
      return { ...state, deleteQuery: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ZIP_FILE":
      return { ...state, zipFile: action.payload };
    case "DELETE_TODO":
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

export default rootReducer;
