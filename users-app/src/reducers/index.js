import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  ADD_USER_START,
  ADD_USER_FAIL,
  DELETE_USER_START,
  DELETE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_FAIL
} from '../actions';

const initialState = {
  users: [],
  isGetting: false,
  isPosting: false,
  isDeleting: false,
  isUpdating: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        isGetting: true,
        isPosting: false,
        isDeleting: false,
        isUpdating: false
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: false,
        users: action.payload
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: false,
        error: action.payload
      };
    case ADD_USER_START:
      return {
        ...state,
        isGetting: false,
        isPosting: true,
        isDeleting: false,
        isUpdating: false
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: false,
        error: action.payload
      };
    case DELETE_USER_START:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: true,
        isUpdating: false
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: false,
        error: action.payload
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: true
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isGetting: false,
        isPosting: false,
        isDeleting: false,
        isUpdating: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
