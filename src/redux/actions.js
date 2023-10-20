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

export const setDeleteQuery = (query) => ({
  type: "SET_DELETE_QUERY",
  payload: query,
});

export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
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

export const setFinalCode = (code) => {
  return {
    type: "SET_FINAL_CODE",
    payload: code,
  };
};

// UPLOAD
export const setZipFile = (file) => {
  return {
    type: "SET_ZIP_FILE",
    payload: file,
  };
};