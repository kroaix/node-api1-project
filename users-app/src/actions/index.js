import axios from 'axios';

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });
  axios
    .get('http://localhost:4000/api/users')
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_FAIL, payload: err });
    });
};

export const addUser = user => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios
    .post('http://localhost:4000/api/users', user)
    .then(() => {
      axios
        .get('http://localhost:4000/api/users')
        .then(res => {
          dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_USERS_FAIL, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: ADD_USER_FAIL, payload: err });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`http://localhost:4000/api/users/${id}`)
    .then(() => {
      axios
        .get('http://localhost:4000/api/users')
        .then(res => {
          dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_USERS_FAIL, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: DELETE_USER_FAIL, payload: err });
    });
};

export const updateUser = (id, user) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios
    .put(`http://localhost:4000/api/users/${id}`, user)
    .then(() => {
      axios
        .get('http://localhost:4000/api/users')
        .then(res => {
          dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_USERS_FAIL, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_FAIL, payload: err });
    });
};
