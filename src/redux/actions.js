// TODOS
export const fetchTodos = (todos) => ({
  type: "FETCH_TODOS",
  payload: todos,
});

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setDeleteResults = (results) => ({
  type: "SET_DELETE_RESULTS",
  payload: results,
});

export const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});

// CODES

export const setFirstCode = (letters) => ({
  type: "SET_FIRST_CODE",
  payload: letters,
});

export const setSecondCode = (letters) => ({
  type: "SET_SECOND_CODE",
  payload: letters,
});

export const setLastCode = (letters) => ({
  type: "SET_LAST_CODE",
  payload: letters,
});