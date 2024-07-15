export const FETCH_NAMES_REQUEST = "FETCH_NAMES_REQUEST";
export const FETCH_NAMES_SUCCESS = "FETCH_NAMES_SUCCESS";
export const FETCH_NAMES_FAILURE = "FETCH_NAMES_FAILURE";

const fetchNamesRequest = () => {
  return {
    type: FETCH_NAMES_REQUEST,
  };
};

const fetchNamesSuccess = (names) => {
  return {
    type: FETCH_NAMES_SUCCESS,
    payload: names,
  };
};

const fetchNamesFailure = (error) => {
  return {
    type: FETCH_NAMES_FAILURE,
    payload: error,
  };
};

export const fetchNames = () => {
  return (dispatch) => {
    dispatch(fetchNamesRequest());
    fetch("https://jsonplaceholder.typicode.com/users") // Ganti dengan URL API yang valid
      .then((response) => response.json())
      .then((data) => dispatch(fetchNamesSuccess(data)))
      .catch((error) => dispatch(fetchNamesFailure(error)));
  };
};
