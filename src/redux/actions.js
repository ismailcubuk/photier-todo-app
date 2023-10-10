export const fetchTodos = (todos) => ({
  type: "FETCH_TODOS",
  payload: todos,
});

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setFirstCode = (letters) => ({
  type: "SET_FIRST_CODE",
  payload: letters,
});

export const setSecondCode = (letters) => ({
    type: "SET_SECOND_CODE",
    payload: letters,
  });
  