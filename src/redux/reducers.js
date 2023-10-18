const initialState = {
  todos: [],
  searchResults: [],
  deleteResults:[],
  firstCode: "",
  secondCode: "",
  lastCode: "",
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
