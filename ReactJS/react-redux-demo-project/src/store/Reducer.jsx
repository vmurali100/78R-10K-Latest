import { ADD_PERSON } from "./ActionTypes";

const defaultState = {
  users: ["Murali", "Krishna", "Ram", "Ravi"],
  persons: [],
  products: [],
  books: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDUSER":
      let newUsers = [...state.users];
      newUsers.push(action.paload);
      return { ...state, users: newUsers };
    case "DELETEUSER":
      let updatedUsers = state.users.filter((user) => user !== action.paload);
      return { ...state, users: updatedUsers };

    case ADD_PERSON:
       let newPersons = [...state.persons];
       newPersons.push(action.payload);
       return {...state,persons:newPersons};
    
    default:
      return state;
  }
  // Create a User
  // Read a User
  // update a User
  // delete a User
};
