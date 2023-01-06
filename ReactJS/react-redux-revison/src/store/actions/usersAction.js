import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./actionTypes";
import axios from "axios";

export const getUsersAsyncAction = () => {
  return (dispatch) => {
    getUsersFromAPI(dispatch);
  };
};

function getUsersFromAPI(dispatch) {
  axios.get("http://localhost:3201/newUsers").then((response) => {
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  });
}

export const addUsersAsyncAction = (user) => {
  return (dispatch) => {
    axios.post("http://localhost:3201/newUsers", user).then(() => {
        getUsersFromAPI(dispatch)
    });
  };
};

export const deleteUsersAsyncAction = (user)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3201/newUsers/"+user.id).then(()=>{
            getUsersFromAPI(dispatch)
        })
    }
}

export const updateUsersAsyncAction = (user)=>{
    return (dispatch)=>{
        axios.put("http://localhost:3201/newUsers/"+user.id,user).then(()=>{
            getUsersFromAPI(dispatch)
        })
    }
}

export const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUserAction = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const updateUserAction = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
