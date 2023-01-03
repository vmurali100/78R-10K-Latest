// Actions

import { ADD_PERSON } from "./ActionTypes";

// Each Action Should return An Object
export const addUserAction = () => {
    return {
      type: "ADDUSER",
      paload: "Naveen",
    };
  };
  
  export const deleteUserAction=(user)=>{
    return {
      type:"DELETEUSER",
      paload:user
    }
  }

  export const addPersonAction = (person)=>{
    return {
      type:ADD_PERSON,
      payload:person
    }
  }