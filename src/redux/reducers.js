import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS,
  FETCH_NAMES_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  names: [],
  error: "",
};

const disasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NAMES_SUCCESS:
      return {
        loading: false,
        names: action.payload,
        error: "",
      };
    case FETCH_NAMES_FAILURE:
      return {
        loading: false,
        names: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default disasterReducer;
