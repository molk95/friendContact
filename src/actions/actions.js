export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text,
});

export const requestKittens = () => (dispatch) => {
  dispatch({
    type: 'REQUEST_CAT_PENDING',
  });
  fetch('https://jsonplaceholder.cypress.io/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'REQUEST_CAT_SUCCESS', payload: data }))
    .catch((error) =>
      dispatch({
        type: 'REQUEST_CAT_FAILED',
        payload: error,
      })
    );
};
